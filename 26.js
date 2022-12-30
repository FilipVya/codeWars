function findMultiples(integer, limit) {
    let arr = [];
    for (i = 1; i <= Math.floor((limit / integer)); i++){
      arr.push((integer * i))
    }
    return arr
  }
  