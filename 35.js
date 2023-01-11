function reverseWords(str){
    let arr = [];
    arr = str.split(' ');
    arr.reverse();
    arr = arr.join(' ');
    return arr; // reverse those words
  }