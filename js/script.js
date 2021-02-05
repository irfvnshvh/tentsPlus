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
  console.log("testBtn clicked!");
});

//on click to test dummyLOGIN button on home.html
$("body").on("click", "#dummy-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("home.html");
});

// on click to test LOGOUT button on signup.html
$("body").on("click", ".logout-btn", function () {
  console.log("back to start page!");
  $("ion-app").load("start.html");
});

$("body").on("click", ".back-btn", function () {
  console.log("back to start page!");
  $("ion-app").load("start.html");
});

// on click to test signup button on signup.html
$("body").on("click", "#signup-btn", function () {
  testSign();
  console.log("signBtn clicked!");
});

// Create variables to store login details
var enteredPhone;
var enteredPass;
var logPhone;
var logPass;

function testLog() {
  // set the user entered value
  enteredPhone = $("#logPhone").val();
  enteredPass = $("#logPass").val();

  if (enteredPhone == "" || enteredPass == "") {
    console.log("is empty/null");
    emptyAlert();
  } else {
      
    //store user entered value into another var
    // this is the var to store into database/localstorage
    logPhone = enteredPhone;
    logPass = enteredPass;

    console.log(logPass + " " + logPhone);
  }
}

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
  alert.message = "Wrong phone number/password";
  alert.buttons = ["OK"];

  console.log("wrong login alert!");
  document.body.appendChild(alert);
  return alert.present();
}




//PAGE NAVIGATION LOAD JS SCRIPTS

// on click to test LOGOUT button on signup.html
$("body").on("click", "#donated-btn", function () {
  console.log("back to donateMod page!");
  $("ion-app").load("donorModule.html");
});

$("body").on("click", "#donorProf-btn", function () {
  console.log("back to donor profile page!");
  $("ion-app").load("donorProf.html");
});

$("body").on("click", "#tenantInv-btn", function () {
  console.log("back to tenantModule page!");
  $("ion-app").load("tenantInv.html");
});

$("body").on("click", "#tenantProf-btn", function () {
  console.log("back to tenantProf page!");
  $("ion-app").load("tenantProf.html");
});

$("body").on("click", "#tenantCons-btn", function () {
  console.log("back to tenantCons page!");
  $("ion-app").load("tenantCons.html");
});

$("body").on("click", ".tenantInvModal-btn", function () {
  console.log("back to tenantInvModal page!");
  $("ion-app").load("tenantInvExtended.html");
});

//MODAL function NOT WORKING
