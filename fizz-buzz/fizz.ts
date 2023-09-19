#!/usr/bin/env node

enum FIZZBUZZ_VALUES {
  FIZZ = "Fizz",
  BUZZ = "Buzz",
  FIZZBUZZ = "FizzBuzz",
}

type FizzBuzzStringValue = keyof typeof FIZZBUZZ_VALUES;

type FizzBuzzResult = number | FizzBuzzStringValue;

// Генерация FizzBuzz последовательности для заданного числа
const generateFizzBuzz = (num: number): FizzBuzzResult[] => {
  const results: FizzBuzzResult[] = [];

  for (let i = 1; i <= num; i++) {
    results.push(getFizzBuzzValue(i));
  }

  return results;
};

// Получение значения FizzBuzz для конкретного числа
const getFizzBuzzValue = (num: number): FizzBuzzResult => {
  if (num % 5 === 0 && num % 3 === 0) {
    return FIZZBUZZ_VALUES.FIZZBUZZ;
  } else if (num % 3 === 0) {
    return FIZZBUZZ_VALUES.FIZZ as FizzBuzzResult;
  } else if (num % 5 === 0) {
    return FIZZBUZZ_VALUES.BUZZ as FizzBuzzResult;
  } else {
    return num;
  }
};

// Вывод FizzBuzz последовательности
const printFizzBuzz = (num: number): void => {
  const results: FizzBuzzResult[] = generateFizzBuzz(num);
  console.log(results);
};

// Пример использования
printFizzBuzz(100);
