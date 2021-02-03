function palindrome(str) {
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = reverseString(str);
  if (str === reversedStr) {
    return true;
  } else return false;
}



