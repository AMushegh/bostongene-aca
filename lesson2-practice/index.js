const payments = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023,
  },
];

// 1
function getMaxPayment(payments) {
  let max = payments[0].payedAmount;

  for (const payment of payments) {
    if (payment.payedAmount > max) {
      max = payment.payedAmount;
    }
  }

  return max;
}

// 2
function getPaymentsSum(payments) {
  let sum = 0;

  for (const payment of payments) {
    sum += payment.payedAmount;
  }

  return sum;
}

// 3
function getPaymentsCountHigherThem(payments, base) {
  let count = 0;

  for (const payment of payments) {
    if (payment.payedAmount > base) {
      ++count;
    }
  }

  return count;
}

// 4
function getPaymentsAverage(payments) {
  return getPaymentsSum(payments) / payments.length;
}

// 5
function getPayers(payments) {
  const container = {};
  for (const payment of payments) {
    if (container[payment.studentId]) {
      container[payment.studentId].totalSum += payment.payedAmount;
    } else {
      container[payment.studentId] = {
        studentId: payment.studentId,
        studentName: payment.studentName,
        totalSum: payment.payedAmount ?? 0,
      };
    }

    console.log(container);
  }

  return Object.values(container);
}

// console.log(getMaxPayment(payments));
// console.log(getPaymentsSum(payments));
// console.log(getPaymentsCountHigherThem(payments, 1500));
// console.log(getPaymentsAverage(payments));
console.log(getPayers(payments));
