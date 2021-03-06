(function() {
"use strict"

// 1.

var allPrices = items.map(function(item){
return item["price"];
});
//the above function takes all prices and puts them into an array called allPrices
var grossPrice = allPrices.reduce(function(previousValue, currentValue){
    return (previousValue + currentValue);
});
// this function adds all of the prices in the allPrices array together using reduce
var averagePriceLong = (grossPrice / items.length); // divides the total of all prices by the number of items
var averagePrice = Math.round(averagePriceLong * 100) / 100; // rounds to two decimal places
//used StackOverflow for rounding: http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
console.log("The average price is: " + averagePrice);

//2.

var priceRange = items.filter(function(item){
  var range = item["price"] > 14 && item["price"] < 18;
  return range;
});
//the function targets the price of each item and then on line 17 filters those items to return those that have a
//price range between 14 and 18
console.log("Items that cost between $14.00 and $18.00 USD: " , priceRange);

//3.
var britishPounds = items.filter(function(item){
  return item["currency_code"] == "GBP";
});
//this function finds the one item with a currency code of GBP
var priceSentence = britishPounds.forEach(function(item){
 console.log(item["title"] + " costs " + "£" + item["price"]);
});
//here I use forEach loop to print the title and price of the object
//I realize it is a bit ridiculous for one object, but this code would scale if there were more than one object
// that used GPB.

//4.

var woodItems = items.filter(function(item){
  if(item["materials"].indexOf("wood") != -1) {
    return item;
  }
});
// filters the list of items and uses indexOf to return the objects that do have wood
var printItems = woodItems.forEach(function(item){
  console.log(item["title"]);
 });
//prints the titles of each item that was stored in the previous function

//5.

var eightItems = items.filter(function(item){
  if(item["materials"].length >= 8) {
    return item;
  }
});
// filters all of the materials keys for the two that have a length longer than 8
var logLongItems = eightItems.forEach(function(item){
  console.log(item);
});
//pringts the objects that have more than 8 materials

//6.

var madeBySeller = items.filter(function(item){
  if(item["who_made"] == "i_did") {
    return item;
  }
});
// grabs each item that was made by the seller
console.log(madeBySeller.length + " were made by their sellers");
//logs the number of sellers 






}());
