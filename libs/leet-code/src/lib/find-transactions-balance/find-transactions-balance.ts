// Task description

// You are given a list of all the transactions on a bank account during the year 2020. The account was empty at the beginning of the year (the balance was 0).

// Each transaction specifies the amount and the date it was executed. If the amount is negative (i.e. less than 0) then it was a card payment, otherwise it was an incoming transfer (amount at least 0). The date of each transaction is in YYYY−MM−DD format: for example, 2020−05−20 represents 20th May 2020.

// Additionally, there is a fee for having a card (omitted in the given transaction list), which is 5 per month. This fee is deducted from the account balance at the end of each month unless there were at least three payments made by card for a total cost of at least 100 within that month.

// Your task is to compute the final balance of the account at the end of the year 2020.

// Write a function:

// function solution(A, D);

// that, given an array A of N integers representing transaction amounts and an array D of N strings representing transaction dates, returns the final balance of the account at the end of the year 2020. Transaction number K (for K within the range [0..N-1]) was executed on the date represented by D[K] for amount A[K].

// Examples:

// 1. Given A = [100, 100, 100, −10] and D = ["2020−12−31", "2020−12−22", "2020−12−03", "2020−12−29"], the function should return 230. Total income was equal to 100 + 100 + 100 − 10 = 290 and the fee was paid every month, so 290 - (5 * 12) = 230.

// 2. Given A = [180, -50, -25, -25] and D = ["2020−01−01", "2020−01−01", "2020−01−01", "2020−01−31"], the function should return 25. The income was equal to 180, the expenditure was equal to 100 and the fee was applied in every month except January: 180 - 100 - (5 * 11) = 25.

// 3. Given A = [1, -1, 0, -105, 1] and D = ["2020−12−31", "2020−04−04", "2020−04−04", "2020−04−14", "2020−07−12"], the function should return -164. The fee is paid every month. 1 - 1 + 0 - 105 + 1 - (5 * 12) = -164. Note that in April, even though the total cost of card payments was 106 (more than 100), there were only two payments made by card, so the fee was still applied. A transaction of value 0 is considered a positive, incoming transfer.

// 4. Given A = [100, 100, -10, -20, -30] and D = ["2020−01−01", "2020−02−01", "2020−02−11", "2020−02−05", "2020−02−08"], the function should return 80.

// Assume that:

// 1. N is an integer within the range [1..100];
// 2. each element of array A is an integer within the range [−1,000..1,000];
// 3. D contains strings in YYYY−MM−DD format, representing dates in the range 2020−01−01 to 2020−12−31.

// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

export function findTransactionsBalance(A, D) {
  // calculate the total income
  const income = A.reduce((acc, curr) => {
    if (curr > 0) {
      return acc + curr;
    }
    return acc;
  }, 0);

  console.log('income', income);

  // calculate the total expenditure
  const expenditure: number = A.reduce((acc, curr) => {
    if (curr < 0) {
      return acc + curr;
    }
    return acc;
  }, 0);

  console.log('exp', expenditure);

  // combine array A and D into an object where D is the key and A is the value
  const transactions = A.map((a, i) => {
    return {
      date: D[i],
      amount: a,
    };
  });

  console.log('transactions', transactions);

  // count how many negative transactions were made and group them by the month they occurred in
  const negativeTransactions = transactions.reduce((acc, curr) => {
    if (curr.amount < 0) {
      if (acc[curr.date.slice(5, 7)] === undefined) {
        acc[curr.date.slice(5, 7)] = 1;
      } else {
        acc[curr.date.slice(5, 7)] += 1;
      }
    }
    return acc;
  }, {});

  console.log(negativeTransactions);

  // count how many negativeTransactions occurred that are greater than 2

  const negativeTransactionsCount = Object.values(negativeTransactions).reduce(
    (acc, curr) => {
      if (curr > 2) {
        // @ts-ignore
        return acc + 1;
      }
      return acc;
    },
    0
  );

  // fee is calculated by 12 - negativeTransactionsCount and multiplied by 5
  // @ts-ignore
  const fee = (12 - (expenditure <= -100 ? negativeTransactionsCount : 0)) * 5;

  console.log('fee', fee);

  // return the final balance
  return income + expenditure - fee;
}

console.log(
  findTransactionsBalance(
    [100, 100, 100, -10],
    ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29']
  )
); // returns 230
console.log(
  findTransactionsBalance(
    [180, -50, -25, -25],
    ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31']
  )
); // returns 25
console.log(
  findTransactionsBalance(
    [1, -1, 0, -105, 1],
    ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12']
  )
); // returns -164
console.log(
  findTransactionsBalance(
    [100, 100, -10, -20, -30],
    ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08']
  )
); // returns 80

// The idea is to use a hashmap to store the transactions and their dates.
// Then, we can iterate through the hashmap and calculate the total income and expenditure.
// We can also use a hashmap to store the number of negative transactions that occurred in each month.
// We can then calculate the fee by subtracting the number of negative transactions that occurred in each month from 12.
// We can then calculate the final balance by adding the income and expenditure and subtracting the fee.
// Time complexity: O(N)
// Space complexity: O(N)
