var x = Math.floor((Math.random() * 256) + 1);
var y = Math.floor((Math.random() * 256) + 1);
var z = Math.floor((Math.random() * 256) + 1);

function bgColor() {
  var randomColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(randomColor);
  document.body.style.background = randomColor;
}
/*Question 1:
function myName() {
    alert("I am Adolf Hitler! Commander of the Third Reich. Little known fact also dope on the mic.");
  }

  Question 2:
  let x = 0;

const counterlabel = document.getElementById("counter");
function Inc() {
    x++;
    counterlabel.textContent = x;
}

function Dec() {
    x--;
    counterlabel.textContent = x;
}

  Question 3:
  function fullName() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var message = "Welcome " + firstName + " " + lastName;
    alert(message);
}

  Question 4:
  function fullName() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var message = "Welcome " + firstName + " " + lastName;
    alert(message);
    var firstName = document.getElementById("firstName").value = " ";
    var lastName = document.getElementById("lastName").value = " ";
}

  Question 5:
  const calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.addEventListener("click", function() {
  const payment = document.getElementById("payment").value;
  const gst = payment * 0.15;
  const gstAmount = document.getElementById("gstAmount");
  gstAmount.innerText = `GST amount: $${gst.toFixed(2)}`;
});

  Question 6:
  const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function() {
  const income = document.getElementById("income").value;
  if (income < 50000){
    const tax = income * 0.2;
    const incomeAmount = document.getElementById("taxAmount");
    incomeAmount.innerText = `Tax= $${tax.toFixed(2)}`;
  }
  else {
    const tax = 10000 + (income - 50000) * 0.3;
    const incomeAmount = document.getElementById("taxAmount");
    incomeAmount.innerText = `Tax= $${tax.toFixed(2)}`;
  }
});

  Question 7:

*/
