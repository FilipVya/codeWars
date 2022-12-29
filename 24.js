function all( arr, fun ){
    for (i = 0; i < arr.length; i++) {
      if (fun(arr[i])) {
        return true
      } else {
        return false
      }
    }
  }