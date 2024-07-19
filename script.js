function isPalindrome(str) {
  let strModified = str.toLowerCase().replace(/ /g, "");
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.toLowerCase()[i].replace(/ /g, "");
  }
  if (result === strModified) {
    return true;
  } else {
    return false;
  }
}

function arrayMaxMin(arr) {
  let numberMax = 0;
  let numberMin = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    let position = arr[i];
    if (position > numberMax) {
      numberMax = position;
    } else if (position < numberMin) {
      numberMin = position;
    }
  }
  let result = [`${numberMin}`, `${numberMax}`]
  return result
}
