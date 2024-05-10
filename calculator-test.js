
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 5, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('188.71');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 300000, years: 30, rate: 4.25};
  expect(calculateMonthlyPayment(values)).toEqual('1475.82');
});

it("should calculate results with high intrest rate correctly", function() {
  const values = {amount: 1500, years: 3, rate: 48.75};
  expect(calculateMonthlyPayment(values)).toEqual('80.02');
});