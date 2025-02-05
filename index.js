const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPerfect(num) {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
}

function isArmstrong(num) {
  let sum = 0,
    temp = num,
    digits = num.toString().length;
  while (temp > 0) {
    sum += Math.pow(temp % 10, digits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

function getProperties(num) {
  let props = [];
  if (isArmstrong(num)) props.push("armstrong");
  props.push(num % 2 === 0 ? "even" : "odd");
  return props;
}

app.get("/api/classify-number", async (req, res) => {
  let { number } = req.query;
  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  number = parseInt(number);
  const digitSum = number
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  try {
    const { data: funFact } = await axios.get(
      `http://numbersapi.com/${number}/math`
    );

    res.json({
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: getProperties(number),
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    res.json({
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: getProperties(number),
      digit_sum: digitSum,
      fun_fact: "Could not fetch fun fact",
    });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
