// First function that comes to mind is a simple For loop.

const sum_to_n_a = (n) => {
  let sum_a = 0;
  for (let i = 0; i <= n; i++) {
    sum_a += i;
  }
  console.log(`Summation to ${n} via sum_to_n_a is ${sum_a}.`);
};

sum_to_n_a(50);

// For loop's cousin - While loop!

const sum_to_n_b = (n) => {
  let sum_b = 0;
  while (n > 0) {
    sum_b += n;
    n - 1;
  }
  console.log(`Summation to ${n} via sum_to_n_b is ${sum_b}.`);
};

sum_to_n_a(50);

//we can also use the summation formula to derive this.

const sum_to_n_c = (n) => {
  sum_c = (n * (n + 1)) / 2;
  console.log(`Summation to ${n} via sum_to_n_c is ${sum_c}.`);
};

sum_to_n_c(50);

//Cheers :)
