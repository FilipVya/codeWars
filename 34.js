function addLength(str) {
   arr = str.split(' ')
   for(i = 0; i < arr.length; i++){
    arr[i] += " " + arr[i].length
   }
 return arr
       }
