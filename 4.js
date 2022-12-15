var humanYearsCatYearsDogYears = function(humanYears) {
    var cat = 0;
    var dog = 0;
    if (humanYears === 1){
      cat = 15;
      dog = 15
    } else if (humanYears === 2){
      cat = 24;
      dog = 24
    } else {
      cat = 24 + (humanYears - 2) * 4;
      dog = 24 + (humanYears - 2) * 4;
    }
    return [humanYears, cat, dog];
  }
  humanYearsCatYearsDogYears(1)
