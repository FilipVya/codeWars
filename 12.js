function shortcut (string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newArr = [];
    for (i = 0; i < string.length; i++) {
      if (vowels.indexOf(string[i]) === -1){
        newArr.push(string[i])
      }
    }
    return newArr.join("");
  }
  console.log(shortcut("hello"))