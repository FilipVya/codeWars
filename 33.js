function repeatStr (n, s) {
    let arr = [];
    for(i = 1; i <= n; i++){
      arr.push(s)
    }
    return arr.join('');
  }