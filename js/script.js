// on document ready
$(document).ready(function () {
  console.log("ready!");

  //create variables for localstorage
  var userID;
  var storedPhone;
  var storedPass;

  var storedSplit;

  var splitTest = 1;

  //Variable to store API data
  var dataArray;

  //set current modal to null
  let currentModal = null;
  let extraModal = null;

  // Loan in start.html on document ready
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
/*
$("body").on("click", ".home-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("home.html");
});*/

$("body").on("click", "#pay-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("paymentModule.html");
});

// on click to test login button on login.html
$("body").on("click", "#login-btn", function () {
  testLog();
  //gotoPage();
  console.log("login button clicked!");
});

//DUMMY LOGINSSSSSS
//on click to test dummyLOGIN AS CASE WORKER button on home.html
$("body").on("click", "#dummy-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("home.html");
});

//on click to test dummyLOGIN AS DONOR button on home.html
$("body").on("click", "#dummy2-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("donorModule.html");
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
    storedPhone = localStorage.getItem("storedPhone");
    storedPass = localStorage.getItem("storedPass");

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
            $("ion-app").load("home.html");
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
            $("ion-app").load("home.html");
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

// load tenant profile details

function loadTenantProfile() {
  document.getElementById("cwName").innerHTML = localStorage.getItem(
    "storedPhone"
  );
  document.getElementById("cwID").innerHTML = localStorage.getItem("storedID");
  //document.getElementById('tenantAddress').innerHTML = localStorage.getItem('storedPass');
}

function changePW() {
  var currentPW = localStorage.getItem("storedPass");
  var enteredPW = $("#enteredPW").val();
  var newPW = $("#newPW").val();
  var confirmPW = $("#confirmPW").val();

  console.log(currentPW);

  if (enteredPW == "" || newPW == "" || confirmPW == "") {
    emptyAlert();
  } else {
    if (enteredPW == currentPW) {
      // if entered password matches database
      console.log("entered password matches stored password");

      if (newPW == confirmPW) {
        //if new password and confirm password matches

        var settings = {
          "url": `http://localhost:8080/api/update/pw/${userID}?address=${newPW}`,
          "method": "PUT",
          "timeout": 0,
        };
        
        $.ajax(settings).done(function (response) {
          console.log("password matches, update password");
          successPWChange();
        });


        
        // update password
      } else {
        //if new password and confirm password DOESNT match
        wrongConfirmPass();
      }
    } else {
      //entered password doesnt match
      wrongPass();
    }
  }
}

function changeSplit(){
  var enteredSplit = $("#splitAmt").val();

  if(enteredSplit == ""){
    emptyAlert();
    //console.log("empty field");
  }
  else{
    localStorage.setItem("storedSplit", enteredSplit);
    // API update code here as well

    //var store =  localStorage.getItem("storedSplit");
    //console.log(store);
    successSplitChange();

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

// Alert functoin for when entered wrong password
function wrongPass() {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "my-custom-class";
  alert.header = "Error";
  alert.message = "Wrong Password";
  alert.buttons = ["OK"];

  console.log("wrong password alert!");
  document.body.appendChild(alert);
  return alert.present();
}

// Alert functoin for when new pass and confirm pass dont match
function wrongConfirmPass() {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "my-custom-class";
  alert.header = "Error";
  alert.message = "New password and confirm password doesn't match!";
  alert.buttons = ["OK"];

  console.log("password not matching alert!");
  document.body.appendChild(alert);
  return alert.present();
}

// Alert function for when password successfully changed
function successPWChange() {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "success";
  alert.header = "Success";
  alert.message = "Password updated!";
  alert.buttons = ["OK"];

  console.log("Change success");
  document.body.appendChild(alert);
  return alert.present();
}

// Alert function for when split successfully changed
function successSplitChange() {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "successSplit";
  alert.header = "Success";
  alert.message = "Updated!";
  alert.buttons = ["OK"];

  console.log("Change success");
  document.body.appendChild(alert);
  return alert.present();
}

// redirect to home page after confirm successPWChange function
$("body").on("click", ".success", function () {
  console.log("success button clicked");
  $("ion-app").load("home.html");
});

// redirect to bills page after confirm successSplitChange function
$("body").on("click", ".successSplit", function () {
  console.log("success split button clicked");
  $("ion-app").load("tenantUtility.html");
});

//DONOR NAVIGATION LOAD JS SCRIPTS
$("body").on("click", "#donated-btn", function () {
  console.log("back to donateMod page!");
  $("ion-app").load("donorModule.html");
});

$("body").on("click", "#donorProf-btn", function () {
  console.log("back to donor profile page!");
  $("ion-app").load("donorProf.html");
});

//TENANT CASE WORKER NAVIGATION LOAD JS SCRIPTS
$("body").on("click", "#tenantInv-btn", function () {
  console.log("back to tenantModule page!");
  $("ion-app").load("tenantInv.html");
});

$("body").on("click", "#tenantProf-btn", function () {
  console.log("back to tenantProf page!");
  $("ion-app").load("tenantProf.html", function () {
    loadTenantProfile();
  });
});

$("body").on("click", "#tenantCons-btn", function () {
  console.log("back to tenantCons page!");
  $("ion-app").load("tenantCons.html");
});

$("body").on("click", "#tenantPayment-btn", function () {
  console.log("back to tenantPayment page!");
  $("ion-app").load("tenantPayment.html");
});

$("body").on("click", "#tenantUtility-btn", function () {
  console.log("back to tenantUtility page!");
  $("ion-app").load("tenantUtility.html");
});

$("body").on("click", ".tenantInvModal-btn", function () {
  console.log("Created tenant inventory modal!");
  createCWInvModal();
});

$("body").on("click", ".consumeModal-btn", function () {
  console.log("Created consumable modal!");
  createConsumablesCWModal();
});

$("body").on("click", ".billModal-btn", function () {
  console.log("Created bill modal!");
  createBillCWModal();
});

$("body").on("click", ".changeSplit-btn", function () {
  console.log("Created split modal!");
  createSplit();
});

$("body").on("click", ".paymentCWModal-btn", function () {
  console.log("Created payment modal!");
  createPayCWModal();
});


$("body").on("click", "#change-pw", function () {
  console.log("Created update caseworker password modal!");
  createUpdateCasePWModal();
});

$("body").on("click", "#updatePW-btn", function () {
  changePW();
});

$("body").on("click", "#updateSplit-btn", function () {
  changeSplit();
  //console.log("change split");
});

//----- Modal for view more tenant inventory ------------------------------------

customElements.define(
  "inv-cw-modal",
  class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <ion-header translucent>
      <ion-toolbar>
        <ion-title>Inventory Info</ion-title>
        <ion-buttons slot="end">
          <ion-button id="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label><h2>SERIAL</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>DONOR</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>ITEM</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LOCATION</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>PRICE</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>HISTORY</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>STATUS</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>ISSUED</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>ASSIGN</h2></ion-label>
          <ion-label><p>0001</p></ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createCWInvModal() {
  const modal = await modalController.create({
    component: "inv-cw-modal",
    cssClass: "CWInvModal",
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view more tenant inventory --------------------

//----- Modal for update case worker password ------------------------------------

customElements.define(
  "update-caseworker-modal",
  class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <ion-header translucent>
      <ion-toolbar>
        <ion-title>Update Password</ion-title>
        <ion-buttons slot="end">
          <ion-button id="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      
      <form>

      <ion-item color="themewhite">
      <ion-label position="floating">Current password</ion-label>
      <ion-input id="enteredPW" type="text" maxlength="8" required></ion-input>
    </ion-item>

    <ion-item color="themewhite">
      <ion-label position="floating">New password</ion-label>
      <ion-input id="newPW" type="text" maxlength="8" required></ion-input>
    </ion-item>

    <ion-item color="themewhite">
      <ion-label position="floating">Confirm password</ion-label>
      <ion-input id="confirmPW" type="text" maxlength="8" required></ion-input>
    </ion-item>

    <div class="acc-btn">
      <ion-button id="updatePW-btn" expand="block" color="themetext">
        <div class="whitetext">Update password</div>
      </ion-button>
    </div>

      </form>

    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createUpdateCasePWModal() {
  const modal = await modalController.create({
    component: "update-caseworker-modal",
    cssClass: "updatePasswordModal",
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for update case worker password --------------------

//----- Modal for view consumables details ------------------------------------

customElements.define(
  "consume-cw-modal",
  class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <ion-header translucent>
      <ion-toolbar>
        <ion-title>Consumable Info</ion-title>
        <ion-buttons slot="end">
          <ion-button id="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>

        <ion-item>
          <ion-label><h2>ITEM NAME</h2></ion-label>
          <ion-label><p>Evian Bottle</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>ITEM ID</h2></ion-label>
          <ion-label><p>#2346</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LABEL</h2></ion-label>
          <ion-label><p>Waiver</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>FEE</h2></ion-label>
          <ion-label><p>$2.40</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>COMMENTS</h2></ion-label>
          <ion-label><p>On the house</p></ion-label>
        </ion-item>
        
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createConsumablesCWModal() {
  const modal = await modalController.create({
    component: "consume-cw-modal",
    cssClass: "consumeCWModal",
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view consumables details --------------------

//----- Modal for view bill details ------------------------------------

customElements.define(
  "bill-cw-modal",
  class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <ion-header translucent>
      <ion-toolbar>
        <ion-title>Bill Info</ion-title>
        <ion-buttons slot="end">
          <ion-button id="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>

        <ion-item>
          <ion-label><h2>BILL ID</h2></ion-label>
          <ion-label><p>0157</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>SPLIT</h2></ion-label>
          <ion-label><p>2</p></ion-label>
          <ion-label><ion-button class="changeSplit-btn" size="small" color="themetext">Edit
          </ion-button></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>BILL WAIVER</h2></ion-label>
          <ion-label><p>Yes</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>DELAY</h2></ion-label>
          <ion-label><p>-</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REMINDER</h2></ion-label>
          <ion-label><p>-</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>COMMENTS</h2></ion-label>
          <ion-label><p>Bill waivered</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create bill modal
async function createBillCWModal() {
  const modal = await modalController.create({
    component: "bill-cw-modal",
    cssClass: "billCWModal",
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view bill details --------------------

//----- Modal for change split ------------------------------------

customElements.define(
  "split-modal",
  class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <ion-header translucent>
      <ion-toolbar>
        <ion-title>Edit Split</ion-title>
        <ion-buttons slot="end">
          <ion-button id="extraCloseModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>

        <ion-item>
        <ion-label>Split amount</ion-label>
        <ion-select id="splitAmt" value="" interface="action-sheet">
          <ion-select-option value="1">1</ion-select-option>
          <ion-select-option value="2">2</ion-select-option>
        </ion-select>
        </ion-item>

        <div class="acc-btn">
      <ion-button id="updateSplit-btn" expand="block" color="themetext">
        <div class="whitetext">Update split amount</div>
      </ion-button>
    </div>

        
        
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createSplit() {
  const modal = await modalController.create({
    component: "split-modal",
    cssClass: "splitModal",
  });

  await modal.present();
  extraModal = modal;
}

//----- End of modal for view consumables details --------------------

//----- Modal for view consumables details ------------------------------------

customElements.define(
  "pay-cw-modal",
  class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <ion-header translucent>
      <ion-toolbar>
        <ion-title>Payment Info</ion-title>
        <ion-buttons slot="end">
          <ion-button id="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>

        <ion-item>
          <ion-label><h2>PAYMENT ID</h2></ion-label>
          <ion-label><p>9785</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>AMOUNT</h2></ion-label>
          <ion-label><p>$20.00</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>DEDUCTION</h2></ion-label>
          <ion-label><p>-%5.00</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>CATEGORY</h2></ion-label>
          <ion-label><p>Rental fee</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>CHARGES</h2></ion-label>
          <ion-label><p>-</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>COMMENTS</h2></ion-label>
          <ion-label><p>Late payment</p></ion-label>
        </ion-item>
        
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createPayCWModal() {
  const modal = await modalController.create({
    component: "pay-cw-modal",
    cssClass: "payCWModal",
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view consumables details --------------------

//close modal using button
$("body").on("click", "#closeModal", function () {
  console.log("Closed modal!");
  dismissModal();
});

//function to dismiss modal
function dismissModal() {
  if (currentModal) {
    currentModal.dismiss().then(() => {
      currentModal = null;
    });
  }
}

//close extra modal using button
$("body").on("click", "#extraCloseModal", function () {
  console.log("Closed extra modal!");
  dismissExtraModal();
});

//function to dismiss modal
function dismissExtraModal() {
  if (extraModal) {
    extraModal.dismiss().then(() => {
      extraModal = null;
    });
  }
}
