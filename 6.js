function saleHotdogs(n){
    var sum = 0
    if (n < 5) sum = n * 100
    else if (n >= 5 && n < 10) sum = n * 95
    else sum = n * 90
    return sum
  }