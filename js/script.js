// on document ready
$(document).ready(function(){
    console.log("ready!");
    // Loan in start.html on document ready
    $("ion-app").load('start.html');
});

// on click login button, load login.html
$("body").on("click", "#login-btn", function(){
    console.log("login loaded!");
    $("ion-app").load('login.html');
});

// on click sign up text, load signup.html
$("body").on("click", "#signup-btn", function(){
    console.log("sign up loaded!");
    $("ion-app").load('signup.html');
});

// on click back button, load start.html
$("body").on("click", ".back-btn", function(){
    console.log("back to start page!");
    $("ion-app").load('start.html');
});

// remove this after finishing with login function
// this one brings u directly into main page
$("body").on("click", ".home-btn", function(){
    console.log("going to homepage!");
    $("ion-app").load('home.html');
});

$("body").on("click", "#pay-btn", function(){
    console.log("going to homepage!");
    $("ion-app").load('paymentModule.html');
});

$("body").on("click", "#testBtn", function(){
    console.log("testBtn clicked!");
});

// Alert function for when input field is empty
function emptyAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Error';
    alert.message = 'Fields cannot be empty!';
    alert.buttons = ['OK'];
  
    console.log("empty alert!");
    document.body.appendChild(alert);
    return alert.present();
  }

// Alert functoin for when wrong login details
  function wrongDetailsAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Error';
    alert.message = 'Wrong phone number/password';
    alert.buttons = ['OK'];

    console.log("wrong login alert!");
    document.body.appendChild(alert);
    return alert.present();
  }
