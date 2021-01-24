$(document).ready(function(){

    console.log("ready!");
    $("ion-app").load('start.html');
});

$("body").on("click", "#login-btn", function(){
    console.log("login loaded!");
    $("ion-app").load('login.html');
});

$("body").on("click", "#signup-btn", function(){
    console.log("sign up loaded!");
    $("ion-app").load('signup.html');
});


$("body").on("click", ".back-btn", function(){
    console.log("back to start page!");
    $("ion-app").load('start.html');
});