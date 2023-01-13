function isPalindrome(x) {
    // your code here
    x = x.toUpperCase();
   return x == x.split("").reverse().join("") 
  }