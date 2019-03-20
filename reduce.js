// 3rd higher order function reduce ()


// multi tool for list transformations

var euros = [29.76, 41.85, 46.5];

var sum = euros.reduce( function(total, amount){
    return total + amount
  });

var avg = euros.reduce( function(total, amount, index, array){
  total += amount;
  if(index === array.length-1)
  {
      return total / array.length;
  }
  else
  return total;
});

console.log(sum);

console.log(avg);