function solution(str, ending){
    let aLen = str.length;
    let bLen = ending.length;
    for(i = 0; i < bLen; i++){
      for(j = aLen - bLen; j < aLen; j++){
        if(str[j] === ending[i]){
          return true
        } else {
          return false
        }
      }
    }
  }