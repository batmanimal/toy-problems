/*
Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
For example, if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/



var getMaxProfit = function(arr) {
  var max = 0;
  var adjustment = 0;
  var diff;
  // iterate over input array
  for (var i = 1; i < arr.length; i++) {
    // get item - first item
    diff = arr[i] - arr[0];
    // if negative, take the abs val and set to adjustment
    if (diff < 0 && Math.abs(diff) > adjustment) {
      adjustment = Math.abs(diff);
    } else {
      // if not neg, add adjustment 
      diff += adjustment;
      // if >= max, set the diff to max 
      if (diff >= max) {
        max = diff;
      }
    } 
  }
  return max;
};


// TESTING 

var stock_prices_yesterday = [ 4, 9, 10, 3, 7, 1, 9, 7, 4, 15 ];
// console.log(getMaxProfit(stock_prices_yesterday));
