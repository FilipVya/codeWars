String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let str = '';
    for(i = 0; i < this.length; i++){
      if (this[i] == this[i].toUpperCase()){
      str += this[i].toLowerCase()
        } else {
          str += this[i].toUpperCase()
        }
      }
      return str
    }