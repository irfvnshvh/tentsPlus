// on document ready
$(document).ready(function () {
  console.log("ready!");
  // Loan in start.html on document ready
  $("ion-app").load("start.html");
});

// on click login button, load login.html
$("body").on("click", "#gotoLogin", function () {
  console.log("login loaded!");
  $("ion-app").load("login.html");
});

// on click sign up text, load signup.html
$("body").on("click", "#gotoSignup", function () {
  console.log("sign up loaded!");
  $("ion-app").load("signup.html");
});

// on click back button, load start.html
$("body").on("click", ".back-btn", function () {
  console.log("back to start page!");
  $("ion-app").load("start.html");
});

// remove this after finishing with login function
// this one brings u directly into main page
$("body").on("click", ".home-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("home.html");
});

$("body").on("click", "#pay-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("paymentModule.html");
});

// on click to test login button on login.html
$("body").on("click", "#login-btn", function () {
  testLog();
  //gotoPage();
  console.log("testBtn clicked!");
});

// on click to test signup button on signup.html
$("body").on("click", "#signup-btn", function () {
  testSign();
  console.log("signBtn clicked!");
});

function gotoPage() {
  $("ion-app").load("home.html");
}

// Create variables to store login details
var enteredPhone;
var enteredPass;
var logPhone;
var logPass;

//Variable to store API data
var dataArray;

function testLog() {
  // set the user entered value
  enteredPhone = $("#logPhone").val();
  enteredPass = $("#logPass").val();

  if (enteredPhone == "" || enteredPass == "") {
    console.log("is empty/null");
    emptyAlert();
  } else {
    // settings for the API
    var settings = {
      url: "http://localhost:8080/api/login",
      method: "GET",
      timeout: 0,
    };

    //function to get data thru API
    $.ajax(settings).done(function (response) {
      //do this after getting data
      //nid to parse to change from string to array
      dataArray = JSON.parse(response);

      //console.log(response);
      console.log(dataArray);
      //console.log("response length is " + response.length);
      //console.log("dataArray length is " + dataArray.length);
      
      //store user entered value into another var
    // this is the var to store into database
    logPhone = enteredPhone;
    logPass = enteredPass;

    console.log(logPass + " " + logPhone);

    for (var i = 0; i < dataArray.length; i++) {
      if (enteredPhone == dataArray[i].Name) {
        if (enteredPass == dataArray[i].Address) {
          // Login successful!
          // run login code here
          console.log("Login success!");
          return;
        } else {
          //invalid password
          console.log("Wrong password!");
          wrongDetailsAlert()
          return;
        }
      } else {
        //invalid phone number
        //check to see if last entry
        if (1 == dataArray.length - i) {
          console.log("Phone number not found!");
          wrongDetailsAlert()
          return;
        }
      }
    }
    // end of for loop
    });

    
  }
  // end of else if phone and password not empty
}
//end of test function

// Create variables to store signup details
var signEnterFirst;
var signEnterLast;
var signEnterPhone;
var signEnterPass;
var signEnterConPass;

var logSignFirst;
var logSignLast;
var logSignPhone;
var logSignPass;
var logSignConPass;

function testSign() {
  // Assign user input values into variables
  signEnterFirst = $("#signFirst").val();
  signEnterLast = $("#signLast").val();
  signEnterPhone = $("#signPhone").val();
  signEnterPass = $("#signPass").val();
  signEnterConPass = $("#signConPass").val();

  // if user input is empty return empty alert function
  if (
    signEnterFirst == "" ||
    signEnterLast == "" ||
    signEnterPhone == "" ||
    signEnterPass == "" ||
    signEnterConPass == ""
  ) {
    console.log("is empty/null");
    emptyAlert();
  }
  // else if not empty, run store function
  else {
    logSignFirst = signEnterFirst;
    logSignLast = signEnterLast;
    logSignPhone = signEnterPhone;
    logSignPass = signEnterPass;
    logSignConPass = signEnterConPass;
    console.log(
      logSignFirst +
        " " +
        logSignLast +
        " " +
        logSignPhone +
        " " +
        logSignPass +
        " " +
        logSignConPass
    );
  }
}

// Alert function for when input field is empty
function emptyAlert() {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "my-custom-class";
  alert.header = "Error";
  alert.message = "Fields cannot be empty!";
  alert.buttons = ["OK"];

  console.log("empty alert!");
  document.body.appendChild(alert);
  return alert.present();
}

// Alert functoin for when wrong login details
function wrongDetailsAlert() {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "my-custom-class";
  alert.header = "Error";
  alert.message = "Wrong Phone number/Password";
  alert.buttons = ["OK"];

  console.log("wrong login alert!");
  document.body.appendChild(alert);
  return alert.present();
}
