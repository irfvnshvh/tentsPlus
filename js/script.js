// on document ready
$(document).ready(function () {
  console.log("ready!");
  // Loan in start.html on document ready
  var userID;

  //Variable to store API data
  var dataArray;

  //set current modal to null
  let currentModal = null;

  $("ion-app").load("start.html");

  //run stay logged in function
  staylogged();
}); // End of document ready

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

$("body").on("click", "#logout-btn", function () {
  logout();
  console.log("logged out clicked!");
});

function gotoPage() {
  $("ion-app").load("home.html");
}

//------------------ Start of stay logged in function ----------------------------

function staylogged() {
  // if localstorage DON'T HAVE login info
  if (localStorage.getItem("storedPhone") === null) {
    console.log("no stay logged in!");
  }
  // if localstore HAS login info
  else {
    // Set localstorage value into var
    userID = localStorage.getItem("storedID");
    var storedPhone = localStorage.getItem("storedPhone");
    var storedPass = localStorage.getItem("storedPass");

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
      console.log(dataArray);

      for (var i = 0; i < dataArray.length; i++) {
        if (storedPhone == dataArray[i].Name) {
          if (storedPass == dataArray[i].Address) {
            console.log("Stay logged in success!");
            return;
          }
        }
      }
      // end of for loop
    });
  }
}

//------------------ End of stay logged in function -----------------------------

//-------------------- Start of log out function --------------------------------

function logout() {
  localStorage.removeItem("storedID");
  localStorage.removeItem("storedPhone");
  localStorage.removeItem("storedPass");

  //redirect to login page here
  $("ion-app").load("start.html");
}

//--------------------- End of log out function ---------------------------------

//--------------------- Start of login function -------------------------------

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

            // store login info into localstorage here ---------------------------
            userID = dataArray[i].ID;
            //console.log("User ID is " + userID);

            localStorage.setItem("storedID", userID);
            localStorage.setItem("storedPhone", enteredPhone);
            localStorage.setItem("storedPass", enteredPass);

            console.log("Login success!");
            return;
          } else {
            //invalid password
            console.log("Wrong password!");
            wrongDetailsAlert();
            return;
          }
        } else {
          //invalid phone number
          //check to see if last entry
          if (1 == dataArray.length - i) {
            console.log("Phone number not found!");
            wrongDetailsAlert();
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

//--------------------- End of login function -------------------------------

//--------------------- Start of sign up function -------------------------------

// Create variables to store signup details
/*var signEnterFirst;
var signEnterLast;
var signEnterPhone;
var signEnterPass;
var signEnterConPass;*/

var signName;
var signAddress;

function testSign() {
  // Assign user input values into variables
  /*signEnterFirst = $("#signFirst").val();
  signEnterLast = $("#signLast").val();
  signEnterPhone = $("#signPhone").val();
  signEnterPass = $("#signPass").val();
  signEnterConPass = $("#signConPass").val();*/

  signName = $("#signName").val();
  signAddress = $("#signAddress").val();

  // if user input is empty return empty alert function
  if (
    /*signEnterFirst == "" ||
    signEnterLast == "" ||
    signEnterPhone == "" ||
    signEnterPass == "" ||
    signEnterConPass == ""*/

    signName == "" ||
    signAddress == ""
  ) {
    console.log("is empty/null");
    emptyAlert();
  }
  // else if not empty, run store function
  else {
    /*logSignFirst = signEnterFirst;
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
    );*/

    var settings = {
      url: `http://localhost:8080/api/signup/add?name=${signName}&address=${signAddress}`,
      method: "POST",
      timeout: 0,
    };

    $.ajax(settings).done(function (response) {
      console.log("success sign");
    });
    // End of API function
  } // End of else if sign in field not empty
}

//--------------------- End of login function -------------------------------

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
  console.log("Created tenant inventory modal!");
  //$("ion-app").load("tenantInvExtended.html");
  createTenantInvModal();
});

$("body").on("click", "#closeModal", function () {
  console.log("Closed modal!");
  //$("ion-app").load("tenantInv.html");
  dismissModal();
});

//MODAL function NOT WORKING

//----- Modal for view more tenant inventory ------------------------------------

customElements.define(
  "tenant-inv-modal",
  class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <ion-header translucent>
      <ion-toolbar>
        <ion-title>Modal Content</ion-title>
        <ion-buttons slot="end">
          <ion-button id="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
        <ion-item>
          <ion-label><h2>Serial</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>Donor</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>Item</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>Location</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>Price</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>History</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>Status</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>Issued</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>Assign</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createTenantInvModal() {
  const modal = await modalController.create({
    component: 'tenant-inv-modal',
    cssClass: 'tenantInvModal'
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view more tenant inventory --------------------

//function to dismiss modal
function dismissModal() {
  if (currentModal) {
    currentModal.dismiss().then(() => { currentModal = null; });
  }
}
