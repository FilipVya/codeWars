var hotpo = function(n){
  var count = 0;
 while (n !== 1) {
   count++;
   if (n % 2) {
     n = 3 * n + 1}
   else {n = n / 2}
 }
 return count;
};