var input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

document.getElementById("text").value;
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
          document.getElementById("text").click();
      }
  });

function palindrome() {
    let word = document.getElementById("text").value;
    function reverseString(str) {
      return str.split("").reverse().join("");
  }
  
    str = word.toLowerCase().replace(/[^a-z0-9]/g,'');
    let reversedStr = reverseString(str);
    if(str === reversedStr) {
        document.getElementById("output").innerHTML = word + " is a palindrome!";
    }
    else document.getElementById("output").innerHTML = word + " is not a palindrome";
  }

  function ClearFields() {

    document.getElementById("text").value = "";
}


  
  