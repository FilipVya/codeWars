function isPythagoreanTriple(integers) {
    integers.sort();
    const sq1 = integers[0] ** 2;
    const sq2 = integers[1] ** 2;
    const sq3 = integers[2] ** 2;
    if (sq1 + sq2 === sq3){
      return true
    } else {
      return false
    }
  }