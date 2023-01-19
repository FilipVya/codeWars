function trim(str, size) {
    if(str.length <= size) {
      return str;
    } else if(str.length <= 3) {
      return str.slice(0, size)+'...';
    } else {
      return str.slice(0, size-3)+'...'
    }
   } 