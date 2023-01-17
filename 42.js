function getSum(a, b)
{
   let sum = 0;
  if(b > a){
  for(; a <= b; a++){
    sum += a
  }
  } else if(a == b){
    sum = a
  } else {
    for(; b <= a; b++){
    sum += b
  }
  }
  return sum
}