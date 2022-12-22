function arrayDiff(a, b) {
    let newArr = [];
      if (a.length === 0) {
        return []
      };
    let newLength = 0;
      if (a.length >= b.length){
        newLength = a.length
      } else {
        newLength = b.length};
    for (i = 0; i < newLength; i++) {
      if (b.indexOf(a[i]) === -1){
        newArr.push(a[i])
      }
    };
    return newArr  
    }