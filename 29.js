function aliasGen(first, last){
    if (/[A-Z]/.test(first[0].toUpperCase()) && /[A-Z]/.test(last[0].toUpperCase())){
      return firstName[first[0].toUpperCase()] + " " + surname[last[0].toUpperCase()]
     } else {
       return "Your name must start with a letter from A - Z."
     } 
  }