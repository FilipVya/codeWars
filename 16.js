function howManydays(month){
    var days;
    switch (month){
    case 4:
        days = 30;
        break;
        case 6:
        days = 30;
        break;
        case 9:
        days = 30;
        break;
        case 11:
        days = 30;
        break;
        case 2:
        days = 28;
        break;
        default:
        days = 31;
        break;
    }
    return days;
  }