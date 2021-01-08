// function called multiply
function math() {
  // variable for first num get from the form input
  let firstnum = document.getElementById("firstnum").value;
  // so that when we get the number its an integer
  firstnum = parseInt(firstnum)
  // variable for the second from second form input
  let secondnum = document.getElementById("secondnum").value;
  // result is 0
  let result = 0
  // makes it into an integer
  result = parseInt(result)
  // again the second input; it runs as many of the second input, 
  for (secondnum = document.getElementById("secondnum").value; secondnum > 0; secondnum--) {
    //result is start at 0+ firtnum then keeps going..
    result = result+firstnum
}
// and when we get through the loop as many times as the second input
if (secondnum === 0) {
  // alert all of the loops together combined
  alert (result)
}
}