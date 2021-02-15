// on document ready
$(document).ready(function () {
  console.log("ready!");

  //create variables for localstorage
  var userID;
  var storedUsername;
  var storedPass;
  var storedAccType;

  var storedSplit;

  var splitTest = 1;

  var storedButtonID;

  var cwTenantID;

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
  login();
  //gotoPage();
  //console.log("login button clicked!");
});

//DUMMY LOGINSSSSSS
//on click to test dummyLOGIN AS CASE WORKER button on home.html
$("body").on("click", "#dummy-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("tenantFamily.html", function(){
    loadTenantFamilyInfo();
  });
});

//on click to test dummyLOGIN AS DONOR button on home.html
$("body").on("click", "#dummy2-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("donorModule.html");
});

$("body").on("click", "#dummy3-btn", function () {
  console.log("going to eReceipt!");
  $("ion-app").load("eReceipt.html", function(){
    loadReceipt();
  });
});

$("body").on("click", ".receipt-btn", function () {
  //console.log("going to eReceipt!");
  $("ion-app").load("eReceipt.html", function(){
    loadReceipt();
  });
});

$("body").on("click", "#dummy4-btn", function () {
  console.log("going to homepage!");
  $("ion-app").load("adminModule.html", function(){
    loadAdminTenantModule();
  });
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

$("body").on("click", ".logout-btn", function () {
  logout();
  console.log("logged out clicked!");
});

function gotoPage() {
  $("ion-app").load("tenantFamily.html", function(){
    loadTenantFamilyInfo();
  });
}

// redirect to home page after confirm successPWChange function
$("body").on("click", ".success", function () {
  console.log("success button clicked");
  $("ion-app").load("tenantFamily.html", function(){
    loadTenantFamilyInfo();
  });
});

// redirect to bills page after confirm successSplitChange function
$("body").on("click", ".successSplit", function () {
  console.log("success split button clicked");
  $("ion-app").load("tenantUtility.html", function(){
    loadCaseworkerUtility();
  });
});

//DONOR NAVIGATION LOAD JS SCRIPTS
$("body").on("click", "#donated-btn", function () {
  console.log("back to donateMod page!");
  $("ion-app").load("donorModule.html", function(){
    loadDonorModuleInfo();
  });
});

$("body").on("click", "#donorProf-btn", function () {
  console.log("back to donor profile page!");
  $("ion-app").load("donorProf.html", function(){
    loadDonorProfile();
  });
});

//TENANT CASE WORKER NAVIGATION LOAD JS SCRIPTS
$("body").on("click", "#tenantInv-btn", function () {
  console.log("back to tenantModule page!");
  $("ion-app").load("tenantInv.html", function(){
    loadCaseworkerInventory();
  });
});

$("body").on("click", "#tenantFamily-btn", function () {
  console.log("back to tenantFamily page!");
  $("ion-app").load("tenantFamily.html", function () {
    loadTenantFamilyInfo();
  });
});

$("body").on("click", "#tenantProf-btn", function () {
  console.log("back to tenantProf page!");
  $("ion-app").load("tenantProf.html", function () {
    //loadTenantProfile();
    loadCaseworkerProfile();
  });
});

$("body").on("click", "#tenantCons-btn", function () {
  console.log("back to tenantCons page!");
  $("ion-app").load("tenantCons.html", function(){
    loadCaseworkerConsumable();
  });
});

$("body").on("click", "#tenantHistory-btn", function () {
  console.log("back to tenantHistory page!");
  $("ion-app").load("tenantHistory.html", function(){
    loadTenantHistory();
  });
});

$("body").on("click", "#tenantPayment-btn", function () {
  console.log("back to tenantPayment page!");
  $("ion-app").load("tenantPayment.html", function(){
    loadCaseworkerPayment();
    getButtonID(this.id);
  });
});

$("body").on("click", "#tenantUtility-btn", function () {
  console.log("back to tenantUtility page!");
  $("ion-app").load("tenantUtility.html", function(){
    loadCaseworkerUtility();
  });
});

$("body").on("click", ".tenantInvModal-btn", function () {
  console.log("Created tenant inventory modal!");
  createCWInvModal();
  getButtonID(this.id);
  
});

$("body").on("click", ".consumeModal-btn", function () {
  console.log("Created consumable modal!");
  createConsumablesCWModal();
  getButtonID(this.id);
});

$("body").on("click", ".billModal-btn", function () {
  console.log("Created bill modal!");
  createBillCWModal();
  getButtonID(this.id);
});

$("body").on("click", ".changeSplit-btn", function () {
  console.log("Created split modal!");
  createSplit();
});

$("body").on("click", ".paymentCWModal-btn", function () {
  console.log("Created payment modal!");
  createPayCWModal();
  getButtonID(this.id);
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

//Admin NAVIGATION LOAD JS SCRIPTS

$("body").on("click", "#adminModule-btn", function () {
  console.log("back to adminMod page!");
  $("ion-app").load("adminModule.html", function(){
    loadAdminTenantModule();
  });
});

$("body").on("click", "#adminInv-btn", function () {
  console.log("back to adminModule page!");
  $("ion-app").load("adminInv.html", function(){
    loadAdminInventory();
  });
});

$("body").on("click", "#adminFamily-btn", function () {
  console.log("back to adminFamily page!");
  $("ion-app").load("tenantFamily.html", function () {
    loadTenantFamilyInfo();
  });
});

$("body").on("click", "#adminDonor-btn", function () {
  console.log("back to adminDonor page!");
  $("ion-app").load("adminDonor.html", function(){
    loadAdminDonor();
  });
});

$("body").on("click", "#adminCons-btn", function () {
  console.log("back to adminCons page!");
  $("ion-app").load("adminCons.html", function(){
    loadAdminConsume();
  });
});

$("body").on("click", "#adminPayment-btn", function () {
  console.log("back to adminPayment page!");
  $("ion-app").load("adminPayment.html", function(){
    loadAdminPayment();
  });
});

$("body").on("click", "#adminUtility-btn", function () {
  console.log("back to adminUtility page!");
  $("ion-app").load("adminUtility.html", function(){
    loadAdminUtility();
  });
});

$("body").on("click", ".admin-tenant-modal-btn", function () {
  console.log("Created admin tenant modal!");
  createAdminTenantModal();
  getButtonID(this.id);
});

$("body").on("click", ".consume-admin-Modal-btn", function () {
  console.log("Created consumable modal!");
  createConsumablesAdminModal();
  getButtonID(this.id);
});

$("body").on("click", ".billAdminModal-btn", function () {
  console.log("Created bill modal!");
  createBillAdminModal();
  getButtonID(this.id);
});

$("body").on("click", ".pay-admin-modal-btn", function () {
  console.log("Created payment modal!");
  createPayAdminModal();
  getButtonID(this.id);
});

$("body").on("click", ".inv-admin-modal-btn", function () {
  console.log("Created payment modal!");
  createInvAdminModal();
  getButtonID(this.id);
});

//------------------ Start of stay logged in function ----------------------------

function staylogged() {
  // if localstorage DON'T HAVE login info
  if (localStorage.getItem("storedUsername") === null) {
    console.log("no stay logged in!");
  }
  // if localstore HAS login info
  else {
    // Set localstorage value into var
    userID = localStorage.getItem("storedID");
    storedUsername = localStorage.getItem("storedUsername");
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
        if (storedUsername == dataArray[i].acc_user) {
          if (storedPass == dataArray[i].acc_pass) {
            //condition for account type
            if ("Admin" == dataArray[i].acc_type) {
              console.log("stay logged in as Admin!");
              $("ion-app").load("adminModule.html", function(){
                loadAdminTenantModule();
              });
              return;
            } else if ("Case Worker" == dataArray[i].acc_type) {
              $("ion-app").load("tenantFamily.html", function () {
              loadTenantFamilyInfo();
              console.log("Stay logged in as case worker!");
              return;
              });
            } else if ("Donor" == dataArray[i].acc_type) {
              $("ion-app").load("donorModule.html", function () {
                console.log("stay logged in as Donor!");
                loadDonorModuleInfo();
                return;
              });
              return;
            }
            //$("ion-app").load("tenantFamily.html");
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
  localStorage.removeItem("storedUsername");
  localStorage.removeItem("storedPass");

  //redirect to login page here
  console.log("cleared localstorage");
  $("ion-app").load("start.html");
}

//--------------------- End of log out function ---------------------------------

//--------------------- Start of login function -------------------------------

// Create variables to store login details
var enteredUser;
var enteredPass;
var logUsername;
var logPass;

function login() {
  // set the user entered value
  enteredUser = $("#logUser").val();
  enteredPass = $("#logPass").val();

  if (enteredUser == "" || enteredPass == "") {
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

      console.log(dataArray);

      //store user entered value into another var
      // this is the var to store into database
      logUsername = enteredUser;
      logPass = enteredPass;

      console.log(logUsername + " " + logPass);

      for (var i = 0; i < dataArray.length; i++) {
        if (enteredUser == dataArray[i].acc_user) {
          if (enteredPass == dataArray[i].acc_pass) {
            // Login successful!
            // run login code here

            // store login info into localstorage here ---------------------------
            userID = dataArray[i].foreign_id;
            storedAccType = dataArray[i].acc_type;
            //storeTenant = dataArray[i].tenant_id;

            localStorage.setItem("storedID", userID);
            localStorage.setItem("storedUsername", enteredUser);
            localStorage.setItem("storedPass", enteredPass);
            localStorage.setItem("storedAccType", storedAccType);

            // condition for account type
            if ("Admin" == dataArray[i].acc_type) {
              console.log("logged in as Admin!");
              $("ion-app").load("adminModule.html", function(){
                loadAdminTenantModule();
              });

              return;
            } else if ("Case Worker" == dataArray[i].acc_type) {
              console.log("logged in as Case worker!");
              $("ion-app").load("tenantFamily.html", function(){
                loadTenantFamilyInfo();
              });
              return;
            } else if ("Donor" == dataArray[i].acc_type) {
              console.log("logged in as Donor!");
              $("ion-app").load("donorModule.html", function(){
                loadDonorModuleInfo();
              });
              return;
            }
            /*
            console.log("Login success!");
            $("ion-app").load("tenantFamily.html");
            return;*/
          } else {
            //invalid password
            console.log("Wrong password!");
            wrongDetailsAlert();
            return;
          }
        } else {
          //invalid username
          //check to see if last entry
          if (1 == dataArray.length - i) {
            console.log("Username not found!");
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


// --------------------------- DONOR PAGE --------------------------------------
function loadDonorModuleInfo() {
  var settings = {
    url: `http://localhost:8080/api/donor/items/${userID}`,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    //console.log(dataArray[0].item_name);
    // assign the table body to add rows into
    var table = document.getElementById("donorModTable");

    // for loop to add in table row bassed on data length
    for (var i = 0; i < dataArray.length; i++) {
      var itemID = localStorage.setItem("itemID", dataArray[i].item_id);
      var itemName = localStorage.setItem("itemName", dataArray[i].item_name);
      var itemStatus = localStorage.setItem(
        "itemStatus",
        dataArray[i].item_status
      );
      var itemLocation = localStorage.setItem(
        "itemLocation",
        dataArray[i].item_location
      );

      var id = localStorage.getItem("itemID");
      var name = localStorage.getItem("itemName");
      var status = localStorage.getItem("itemStatus");
      var location = localStorage.getItem("itemLocation");

      console.log(id + " " + name + " " + status + " " + location);

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var tdStatus = document.createElement("td");
      tdStatus.setAttribute("class", "infoCell");
      var tdLocation = document.createElement("td");
      tdLocation.setAttribute("class", "infoCell");

      var textID = document.createTextNode(id);
      var textName = document.createTextNode(name);
      var textStatus = document.createTextNode(status);
      var textLocation = document.createTextNode(location);

      //Set the length/size of array so can determine how many td to add in
      //var size = Object.keys(dataArray[i]).length;
      //console.log(size);

      //for (var j = 0; j < 1; j++){

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdStatus);
      tdStatus.appendChild(textStatus);

      tr.appendChild(tdLocation);
      tdLocation.appendChild(textLocation);

      //console.log("running");
      //}

      table.appendChild(tr);
    }
  });
}

function loadDonorProfile(){
  document.getElementById("donor_name").innerHTML = localStorage.getItem("storedUsername");
  document.getElementById("donor_id").innerHTML = localStorage.getItem("storedID");
}

// ---------------------- End of donor page -------------------------------------

// -------------------------- ADMIN PAGE ------------------------------------------

function loadAdminTenantModule() {
  var settings = {
    "url": "http://localhost:8080/api/admin/tenants",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);

    var table = document.getElementById("adminModTable");

    // for loop to add in table row bassed on data length
    for (var i = 0; i < dataArray.length; i++) {

      var id = dataArray[i].tenant_id;
      var co = dataArray[i].cotenant_num;
      var unit = dataArray[i].unit_num;

      //console.log(id + " " + co + " " + unit);

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdCo = document.createElement("td");
      tdCo.setAttribute("class", "infoCell");
      var tdUnit = document.createElement("td");
      tdUnit.setAttribute("class", "infoCell");
      
      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "admin-tenant-modal-btn");
      ionButton.setAttribute("id", `${dataArray[i].tenant_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(id);
      var textCo = document.createTextNode(co);
      var textUnit = document.createTextNode(unit);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdCo);
      tdCo.appendChild(textCo);

      tr.appendChild(tdUnit);
      tdUnit.appendChild(textUnit);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }
  });
}

function getButtonID(buttonID){
  storedButtonID = buttonID;
  console.log(storedButtonID);
}

function loadAdminDonor(){
  var settings = {
    "url": "http://localhost:8080/api/admin/donors",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    //console.log(response);

    var table = document.getElementById("adminDonorTable");

    for (var i = 0; i < dataArray.length; i++){
      var donorID =  dataArray[i].donor_id;
      var donorName = dataArray[i].donor_name;
      var donorItemID = dataArray[i].item_id;
      var donorItemLocation = dataArray[i].unit_id;

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var tdItemID = document.createElement("td");
      tdItemID.setAttribute("class", "infoCell");
      var tdItemLocate = document.createElement("td");
      tdItemLocate.setAttribute("class", "infoCell");

      var textID = document.createTextNode(donorID);
      var textName = document.createTextNode(donorName);
      var textItemID = document.createTextNode(donorItemID);
      var textItemLocate = document.createTextNode(donorItemLocation);

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdItemID);
      tdItemID.appendChild(textItemID);

      tr.appendChild(tdItemLocate);
      tdItemLocate.appendChild(textItemLocate);

      table.appendChild(tr);
    }

  });
}

function loadAdminConsume(){
  var settings = {
    "url": "http://localhost:8080/api/admin/consumables",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    //console.log(response);

    var table = document.getElementById("adminConsumeTable");

    for (var i = 0; i < dataArray.length; i++){
      var tenantID =  dataArray[i].tenant_id;
      var itemName = dataArray[i].cons_name;
      var itemLabel = dataArray[i].cons_label;

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var tdItemLabel = document.createElement("td");
      tdItemLabel.setAttribute("class", "infoCell");
      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "consume-admin-Modal-btn");
      ionButton.setAttribute("id", `${dataArray[i].cons_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(tenantID);
      var textName = document.createTextNode(itemName);
      var textItemID = document.createTextNode(itemLabel);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdItemLabel);
      tdItemLabel.appendChild(textItemID);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }


  });
}

function loadAdminUtility(){
  var settings = {
    "url": "http://localhost:8080/api/admin/utility",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);

    var table = document.getElementById("adminUtilityTable");

    for (var i = 0; i < dataArray.length; i++){
      var tenantID =  dataArray[i].utility_id;
      var itemName = dataArray[i].tenant_num;
      var utilityComments

      if(dataArray[i].comment_bill = "undefined"){
        utilityComments = " - ";
        console.log("comment undefined")
      }
      else{
        utilityComments = dataArray[i].comment_bill;
      }

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var tdComment = document.createElement("td");
      tdComment.setAttribute("class", "infoCell");
      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "billAdminModal-btn");
      ionButton.setAttribute("id", `${dataArray[i].utility_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(tenantID);
      var textName = document.createTextNode(itemName);
      var textItemID = document.createTextNode(utilityComments);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdComment);
      tdComment.appendChild(textItemID);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }

  });
}

function loadAdminPayment(){
  var settings = {
    "url": "http://localhost:8080/api/admin/payment",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);

    var table = document.getElementById("adminPaymentTable");

    for (var i = 0; i < dataArray.length; i++){
      var paymentID =  dataArray[i].payment_id;
      var amount = dataArray[i].amount_owe;
      var deposit = dataArray[i].deposit_deduction;

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var tdComment = document.createElement("td");
      tdComment.setAttribute("class", "infoCell");
      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "pay-admin-modal-btn");
      ionButton.setAttribute("id", `${dataArray[i].payment_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(paymentID);
      var textName = document.createTextNode("$"+amount);
      var textItemID = document.createTextNode("$"+deposit);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdComment);
      tdComment.appendChild(textItemID);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }
  });
}

function loadAdminInventory(){
  var settings = {
    "url": "http://localhost:8080/api/admin/inventory",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);

    var table = document.getElementById("adminInvTable");

    for (var i = 0; i < dataArray.length; i++){
      var itemID =  dataArray[i].item_id;
      var donor = dataArray[i].donor_name;
      var item = dataArray[i].item_name;

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var tdComment = document.createElement("td");
      tdComment.setAttribute("class", "infoCell");
      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "inv-admin-modal-btn");
      ionButton.setAttribute("id", `${dataArray[i].item_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(itemID);
      var textName = document.createTextNode(donor);
      var textItemID = document.createTextNode(item);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdComment);
      tdComment.appendChild(textItemID);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }

  });
}


// ----------------------- End of admin page --------------------------------------

// -------------------------- CASE WORKER PAGE ------------------------------------------

function loadTenantFamilyInfo(){
  var settings = {
    "url": `http://localhost:8080/api/caseworker/family/${userID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    //console.log(dataArray);

    cwTenantID = dataArray[0].tenant_id;
    //console.log(cwTenantID);
    document.getElementById("cwUnitNum").innerHTML = dataArray[0].unit_num;
    document.getElementById("cwTenantID").innerHTML = dataArray[0].tenant_id;
    loadFamilyCotenantInfo();
  });

}

function loadFamilyCotenantInfo(){
  var settings2 = {
    "url": `http://localhost:8080/api/caseworker/family/cotenants/${cwTenantID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings2).done(function (response) {
    dataArray2 = JSON.parse(response);
    //console.log(dataArray2);

    for (var i = 0; i < dataArray2.length; i++){
      var cotName =  dataArray2[i].cot_name;
      var cotID = dataArray2[i].cot_id;
      var cotPhone = dataArray2[i].cot_phone;
      var cotCitizen = dataArray2[i].cot_citizenship;

      var ionLabelNameTitle = "<ion-label>Name</ion-label>";
      var ionLabelName = `<ion-label>${cotName}</ion-label>`;

      var ionLabelIDTitle = "<ion-label>Co-Tenant ID</ion-label>";
      var ionLabelID = `<ion-label>${cotID}</ion-label>`;

      var ionLabelPhoneTitle = "<ion-label>Phone Number</ion-label>";
      var ionLabelPhone = `<ion-label>${cotPhone}</ion-label>`;

      var ionLabelCitizenTitle = "<ion-label>Citizenship</ion-label>";
      var ionLabelCiti = `<ion-label>${cotCitizen}</ion-label>`;

      $("#cwCotenantInfoList").append(`<ion-item>${ionLabelNameTitle} ${ionLabelName}</ion-item>`);
      $("#cwCotenantInfoList").append(`<ion-item>${ionLabelIDTitle} ${ionLabelID}</ion-item>`);
      $("#cwCotenantInfoList").append(`<ion-item>${ionLabelPhoneTitle} ${ionLabelPhone}</ion-item>`);
      $("#cwCotenantInfoList").append(`<ion-item>${ionLabelCitizenTitle} ${ionLabelCiti}</ion-item>`);

      $("#cwCotenantInfoList").append(`<ion-item-divider><ion-label><br></ion-label></ion-item-divider>`);

      //console.log("run");

    }


  });
}

function loadTenantHistory(){
  var settings = {
    "url": `http://localhost:8080/api/caseworker/family/history/${cwTenantID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray2 = JSON.parse(response);
    console.log(dataArray2);

    document.getElementById("cwHistID").innerHTML = dataArray2[0].tenant_hist_id;
    document.getElementById("cwHistDate").innerHTML = dataArray2[0].tenant_hist_update;
    document.getElementById("cwHistUnitID").innerHTML = dataArray2[0].unit_id;
    document.getElementById("cwHistNum").innerHTML = dataArray2[0].cotenant_num;

  });
}

function loadCaseworkerProfile(){
  var accID = localStorage.getItem("storedID");
  var settings = {
    "url": `http://localhost:8080/api/caseworker/profile/${accID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);

    document.getElementById("cwName").innerHTML = dataArray[0].case_name;
    document.getElementById("cwID").innerHTML = dataArray[0].case_id;
  });
}

function loadCaseworkerUtility(){
  var settings = {
    "url": `http://localhost:8080/api/caseworker/utility/${userID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    //console.log(dataArray);

    var table = document.getElementById("cwUtilityModal");

    for (var i = 0; i < dataArray.length; i++){
      var billID =  dataArray[i].utility_id;
      var splitAmt = dataArray[i].tenant_num;

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "billModal-btn");
      ionButton.setAttribute("id", `${dataArray[i].utility_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(billID);
      var textName = document.createTextNode(splitAmt);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }

  });
}

function loadCaseworkerPayment(){
  var settings = {
    "url": `http://localhost:8080/api/caseworker/payment/${cwTenantID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);

    var table = document.getElementById("cwPaymentTable");

    for (var i = 0; i < dataArray.length; i++){
      var paymentID =  dataArray[i].payment_id;
      var amountOwe = dataArray[i].amount_owe;
      var deduction = dataArray[i].deposit_deduction;

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var tdDeduct = document.createElement("td");
      tdDeduct.setAttribute("class", "infoCell");


      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "paymentCWModal-btn");
      ionButton.setAttribute("id", `${dataArray[i].payment_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(paymentID);
      var textName = document.createTextNode("$" + amountOwe);
      var textDeduct = document.createTextNode("$" + deduction);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdDeduct);
      tdDeduct.appendChild(textDeduct);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }

  });
}

function loadCaseworkerConsumable(){
  var settings = {
    "url": `http://localhost:8080/api/caseworker/consumables/${cwTenantID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);

    var table = document.getElementById("cwConsumablesTable");

    for (var i = 0; i < dataArray.length; i++){
      var paymentID =  dataArray[i].cons_name;
      var amountOwe = dataArray[i].cons_label;

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");


      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "consumeModal-btn");
      ionButton.setAttribute("id", `${dataArray[i].cons_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(paymentID);
      var textName = document.createTextNode(amountOwe);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }
    

  });
}

function loadCaseworkerInventory(){
  var settings = {
    "url": `http://localhost:8080/api/caseworker/inventory/${cwTenantID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);

    var table = document.getElementById("cwInventoryTable");

    for (var i = 0; i < dataArray.length; i++){
      var serialID =  dataArray[i].item_id;
      var donor = dataArray[i].donor_name;
      var item = dataArray[i].item_name;

      var tr = document.createElement("tr");
      tr.setAttribute("class", "infoRow");

      var tdButton = document.createElement("td");
      tdButton.setAttribute("class", "infoButton");

      var tdID = document.createElement("td");
      tdID.setAttribute("class", "infoCell");
      var tdName = document.createElement("td");
      tdName.setAttribute("class", "infoCell");
      var tdDeduct = document.createElement("td");
      tdDeduct.setAttribute("class", "infoCell");


      var ionButton = document.createElement("ion-button");
      ionButton.setAttribute("class", "tenantInvModal-btn");
      ionButton.setAttribute("id", `${dataArray[i].item_id}`);
      ionButton.setAttribute("size", "small");
      ionButton.setAttribute("expand", "block");
      ionButton.setAttribute("color", "themetext");

      var textID = document.createTextNode(serialID);
      var textName = document.createTextNode(donor);
      var textDeduct = document.createTextNode(item);
      var buttonText = document.createTextNode("More");

      tr.appendChild(tdID);
      tdID.appendChild(textID);

      tr.appendChild(tdName);
      tdName.appendChild(textName);

      tr.appendChild(tdDeduct);
      tdDeduct.appendChild(textDeduct);

      tr.appendChild(tdButton);
      tdButton.appendChild(ionButton);
      ionButton.appendChild(buttonText);

      table.appendChild(tr);
    }
  });
}

function loadReceipt(){
  var settings = {
    "url": `http://localhost:8080/api/caseworker/receipt/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);
    var total;
    document.getElementById("receiptTenantID").innerHTML = dataArray[0].tenant_id;
    document.getElementById("receiptAmtOwe").innerHTML = "$" + dataArray[0].amount_owe;
    document.getElementById("receiptRentalDeposit").innerHTML = "$" + dataArray[0].rental_deposit;
    document.getElementById("receiptDepositDeduct").innerHTML = "$" + dataArray[0].deposit_deduction;
    document.getElementById("receiptNegliCharge").innerHTML = "$" + dataArray[0].negligence_charge;

    total = ((dataArray[0].amount_owe - dataArray[0].deposit_deduction) - dataArray[0].negligence_charge);
    document.getElementById("receiptTotal").innerHTML = "$" + total;
  });
}



// ----------------------- End of case worker page --------------------------------------

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
          url: `http://localhost:8080/api/update/pw/${userID}?address=${newPW}`,
          method: "PUT",
          timeout: 0,
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

function changeSplit() {
  var enteredSplit = $("#splitAmt").val();

  if (enteredSplit == "") {
    emptyAlert();
    //console.log("empty field");
  } else {
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

  //console.log("empty alert!");
  document.body.appendChild(alert);
  return alert.present();
}

// Alert functoin for when wrong login details
function wrongDetailsAlert() {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "my-custom-class";
  alert.header = "Error";
  alert.message = "Wrong Username/Password";
  alert.buttons = ["OK"];

  //console.log("wrong login alert!");
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

  //console.log("wrong password alert!");
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

  //console.log("password not matching alert!");
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

  //console.log("Change success");
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

  //console.log("Change success");
  document.body.appendChild(alert);
  return alert.present();
}

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
          <ion-label><h2>DONOR</h2></ion-label>
          <ion-label><p id="cwInvDonorName">JACK TYLER | DR8341</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>ITEM</h2></ion-label>
          <ion-label><p id="cwInvItemName">KITCHEN SPOON | IT1234</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LOCATION</h2></ion-label>
          <ion-label><p id="cwInvItemLocation"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REPAIR FREQUENCY</h2></ion-label>
          <ion-label><p id="cwInvRepairFre"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REPAIR STATUS</h2></ion-label>
          <ion-label><p id="cwInvRepairSta"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REPAIR TYPE</h2></ion-label>
          <ion-label><p id="cwInvRepairType"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>CURRENT STATUS</h2></ion-label>
          <ion-label><p id="cwInvItemStatus">ISSUED</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>STATUS HISTORY</h2></ion-label>
          <ion-label><p id="cwInvStaHist"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LOCATION HISTORY</h2></ion-label>
          <ion-label><p id="cwInvLocHist"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LAST UPDATE HISTORY</h2></ion-label>
          <ion-label><p id="cwInvDateHist"></p></ion-label>
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

  var settings = {
    "url": `http://localhost:8080/api/caseworker/inventory/detail/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var dataArray2 = JSON.parse(response);
    console.log(dataArray2);

    document.getElementById("cwInvDonorName").innerHTML = dataArray2[0].donor_name + " | " + dataArray2[0].donor_id;
    document.getElementById("cwInvItemName").innerHTML = dataArray2[0].item_name + " | " + dataArray2[0].item_id;
    document.getElementById("cwInvItemLocation").innerHTML = dataArray2[0].item_location;
    document.getElementById("cwInvRepairFre").innerHTML = dataArray2[0].repair_frequency;
    document.getElementById("cwInvRepairSta").innerHTML = dataArray2[0].repair_status;
    document.getElementById("cwInvRepairType").innerHTML = dataArray2[0].repair_type;
    document.getElementById("cwInvItemStatus").innerHTML = dataArray2[0].item_status;

    for (var i = 0; i < dataArray2.length; i++){
      document.getElementById("cwInvStaHist").append(dataArray2[i].item_status+", ");
      document.getElementById("cwInvLocHist").append(dataArray2[i].item_location+", ");
      document.getElementById("cwInvDateHist").append(dataArray2[i].item_date+", ");
     
    }

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
      <ion-input id="enteredPW" type="password" maxlength="8" required></ion-input>
    </ion-item>

    <ion-item color="themewhite">
      <ion-label position="floating">New password</ion-label>
      <ion-input id="newPW" type="password" maxlength="8" required></ion-input>
    </ion-item>

    <ion-item color="themewhite">
      <ion-label position="floating">Confirm password</ion-label>
      <ion-input id="confirmPW" type="password" maxlength="8" required></ion-input>
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
          <ion-label><p id="cwConsName">Evian Bottle</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>ITEM ID</h2></ion-label>
          <ion-label><p id="cwConsID">#2346</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LABEL</h2></ion-label>
          <ion-label><p id="cwConsLabel">Waiver</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>STATUS</h2></ion-label>
          <ion-label><p id="cwConsStatus">$2.40</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>COMMENTS</h2></ion-label>
          <ion-label><p id="cwConsComments">On the house</p></ion-label>
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

  var settings = {
    "url": `http://localhost:8080/api/caseworker/consumables/detail/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var dataArray2 = JSON.parse(response);
    console.log(dataArray2);

    var comments;

    if(dataArray2[0].cons_comment = "undefined"){
      comments = " - ";
    }else{
      comments = dataArray2[0].cons_comment;
    }

    document.getElementById("cwConsName").innerHTML = dataArray2[0].cons_name;
    document.getElementById("cwConsID").innerHTML = dataArray2[0].cons_id;
    document.getElementById("cwConsLabel").innerHTML = dataArray2[0].cons_label;
    document.getElementById("cwConsStatus").innerHTML = dataArray2[0].cons_status;
    document.getElementById("cwConsComments").innerHTML = comments;
    
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
          <ion-label><p id="cwBillID">0157</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>SPLIT</h2></ion-label>
          <ion-label><p id="cwSplitAmt">2</p></ion-label>
          <ion-label><ion-button class="changeSplit-btn" size="small" color="themetext">Edit
          </ion-button></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>BILL WAIVER</h2></ion-label>
          <ion-label><p id="cwBillWaive">Yes</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>DELAY</h2></ion-label>
          <ion-label><p id="cwBillDelay">-</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REMINDER</h2></ion-label>
          <ion-label><p id="cwBillReminder">-</p></ion-label>
          <ion-label></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>COMMENTS</h2></ion-label>
          <ion-label><p id="cwBillComment">Bill waivered</p></ion-label>
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
  
  var settings = {
    "url": `http://localhost:8080/api/caseworker/utility/${userID}/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray = JSON.parse(response);
    console.log(dataArray);

    var billComment;
    var paymentReminder;
    var paymentDelay;

    if(dataArray[0].comment_bill = "undefined"){
      billComment = " - ";
    }
    else{
      billComment = dataArray[0].comment_bill;
    }

    if(dataArray[0].payment_delay = "undefined"){
      paymentDelay = " - ";
    }
    else{
      paymentDelay = dataArray[0].payment_delay;
    }

    if(dataArray[0].payment_reminder = "undefined"){
      paymentReminder = " - ";
    }
    else{
      paymentReminder = dataArray[0].payment_reminder;
    }
    
    document.getElementById("cwBillID").innerHTML = dataArray[0].utility_id;
    document.getElementById("cwSplitAmt").innerHTML = dataArray[0].tenant_num;
    document.getElementById("cwBillWaive").innerHTML = dataArray[0].waive_bill;
    document.getElementById("cwBillDelay").innerHTML = paymentDelay;
    document.getElementById("cwBillReminder").innerHTML = paymentReminder;
    document.getElementById("cwBillComment").innerHTML = billComment;


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
          <ion-label><p id="cwPaymentID">9785</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>AMOUNT</h2></ion-label>
          <ion-label><p id="cwPaymentAmt">$20.00</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>DEDUCTION</h2></ion-label>
          <ion-label><p id="cwPaymentDeduct">-%5.00</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>CATEGORY</h2></ion-label>
          <ion-label><p id="cwPaymentCat">Rental fee</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>CHARGES</h2></ion-label>
          <ion-label><p id="cwPaymentCharge">-</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>COMMENTS</h2></ion-label>
          <ion-label><p id="cwPaymentComment">Late payment</p></ion-label>
        </ion-item>

        <ion-item>
          <ion-label><ion-button class="receipt-btn" id="${storedButtonID}" expand="block" color="themetext">Receipt</ion-button></ion-label>
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

  var settings = {
    "url": `http://localhost:8080/api/caseworker/family/payment/detail/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var dataArray = JSON.parse(response);
    console.log(dataArray);


    var paymentComment;

    if(dataArray[0].payment_note = "undefined"){
      paymentComment = " - ";
    }else{
      paymentComment = dataArray[0].payment_note;
    }

    document.getElementById("cwPaymentID").innerHTML = dataArray[0].payment_id;
    document.getElementById("cwPaymentAmt").innerHTML = "$" + dataArray[0].amount_owe;
    document.getElementById("cwPaymentDeduct").innerHTML = "$" + dataArray[0].deposit_deduction;
    document.getElementById("cwPaymentCat").innerHTML = dataArray[0].payment_cat;
    document.getElementById("cwPaymentCharge").innerHTML = "$" + dataArray[0].negligence_charge;
    document.getElementById("cwPaymentComment").innerHTML = paymentComment;
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view consumables details --------------------


//----- start of modal for view adminTenant details --------------------
customElements.define(
  "admin-tenant-modal",
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
          <ion-label><h2>ID</h2></ion-label>
          <ion-label><p id="tenantID">TT0819</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>UNIT ID</h2></ion-label>
          <ion-label><p id="unitID">UT1010</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>UNIT NO.</h2></ion-label>
          <ion-label><p id="unitNum">#09-123</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>NO. OF CO-TENANTS</h2></ion-label>
          <ion-label><p id="cotenantNum">3</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>CO-TENANTS DETAILS</h2></ion-label>
          <ion-label><p id="cotenantDetails"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>RENTAL AMOUNT</h2></ion-label>
          <ion-label><p id="rentAmt">$500.00</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>RENTAL DEPOSIT</h2></ion-label>
          <ion-label><p id="rentDeposit">$250</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>RENTAL STATUS</h2></ion-label>
          <ion-label><p id="rentStatus">FULLY PAID</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>OTHER CHARGES</h2></ion-label>
          <ion-label><p id="otherCharges">$69.00</p></ion-label>
        </ion-item>
      </ion-list>
      
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createAdminTenantModal() {
  const modal = await modalController.create({
    component: "admin-tenant-modal",
    cssClass: "adminTenantModal",
  });
  // get tenant's info based on ID
  var settings = {
    "url": `http://localhost:8080/api/admin/tenants/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  $.ajax(settings).done(function (response) {
    
    var dataArray2 = JSON.parse(response);
    console.log(dataArray2);
    //console.log(dataArray2[0].tenant_id);

    document.getElementById("tenantID").innerHTML = dataArray2[0].tenant_id;
    document.getElementById("unitID").innerHTML = dataArray2[0].unit_id;
    document.getElementById("unitNum").innerHTML = dataArray2[0].unit_num;
    document.getElementById("cotenantNum").innerHTML = dataArray2[0].cotenant_num;
    document.getElementById("rentAmt").innerHTML = dataArray2[0].rental_amount;
    document.getElementById("rentDeposit").innerHTML = dataArray2[0].rental_deposit;
    document.getElementById("rentStatus").innerHTML = dataArray2[0].rental_status;
    document.getElementById("otherCharges").innerHTML = dataArray2[0].negligence_charge;
    
    //console.log("run");
  });

  // get the id of cotenant's based on tenant id
  var settings2 = {
    "url": `http://localhost:8080/api/admin/tenants/cotents/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings2).done(function (response) {
    var dataArray3 = JSON.parse(response);
    console.log(dataArray3);
    for (var i = 0; i < dataArray3.length; i++){
      //document.getElementById("cotenantDetails").innerHTML = dataArray3[i].cot_id;
      $("#cotenantDetails").append(dataArray3[i].cot_id + " ");
    }
  });


  await modal.present();
  currentModal = modal;
}

//----- Modal for view consumables details ------------------------------------

customElements.define(
  "pay-admin-modal",
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
          <ion-label><h2>Tenant ID</h2></ion-label>
          <ion-label><p id="paymentTenantID">TT9876</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>AMOUNT</h2></ion-label>
          <ion-label><p id="paymentAmount">$20.00</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>DEDUCTION</h2></ion-label>
          <ion-label><p id="paymentDeduction">-%5.00</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>CATEGORY</h2></ion-label>
          <ion-label><p id="paymentCategory">Rental fee</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>CHARGES</h2></ion-label>
          <ion-label><p id="paymentCharges">NIL</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>NOTE</h2></ion-label>
          <ion-label><p id="paymentNotes">Late payment</p></ion-label>
        </ion-item>
        
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createPayAdminModal() {
  const modal = await modalController.create({
    component: "pay-admin-modal",
    cssClass: "payAdminModal",
  });

  var settings = {
    "url": `http://localhost:8080/api/admin/payment/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var dataArray = JSON.parse(response);
    console.log(dataArray);

    var paymentNotes;

    if(dataArray[0].paymentNote = "undefined"){
      paymentNotes = " - ";
    }
    else{
      paymentNotes = dataArray[0].paymentNote;
    }

    document.getElementById("paymentTenantID").innerHTML = dataArray[0].tenant_id;
    document.getElementById("paymentAmount").innerHTML = "$" + dataArray[0].amount_owe;
    document.getElementById("paymentDeduction").innerHTML = "$" + dataArray[0].deposit_deduction;
    document.getElementById("paymentCategory").innerHTML = dataArray[0].payment_cat;
    document.getElementById("paymentCharges").innerHTML = "$" + dataArray[0].negligence_charge;
    document.getElementById("paymentNotes").innerHTML =paymentNotes;
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view consumables details --------------------

//----- Modal for view bill details ------------------------------------

customElements.define(
  "bill-admin-modal",
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
          <ion-label><h2>SERIAL</h2></ion-label>
          <ion-label><p id="utilityID">UB1234</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>SPLIT</h2></ion-label>
          <ion-label><p id="splitNum">2</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>COMMENTS</h2></ion-label>
          <ion-label><p id="utilityComments">Bill Waivered</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>DELAY</h2></ion-label>
          <ion-label><p id="utilityDelay">-</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REMINDER</h2></ion-label>
          <ion-label><p id="utilityReminder">-</p></ion-label>
        </ion-item>
        
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create bill modal
async function createBillAdminModal() {
  const modal = await modalController.create({
    component: "bill-admin-modal",
    cssClass: "billAdminModal",
  });

  var settings = {
    "url": `http://localhost:8080/api/admin/utility/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    dataArray2 = JSON.parse(response);
    console.log(response);

    var paymentDelay;
    var paymentReminder;
    var paymentComment;

    if(dataArray2[0].payment_delay = "undefined"){
      paymentDelay = " - ";
    }
    else{
      paymentDelay = dataArray2[0].payment_delay;
    }
    
    if(dataArray2[0].payment_reminder = "undefined"){
      paymentReminder = " - ";
    }
    else{
      paymentReminder = dataArray2[0].payment_reminder;
    }

    if(dataArray2[0].comment_bill = "undefined"){
      paymentComment = " - ";
    }
    else{
      paymentComment = dataArray2[0].comment_bill;
    }

    document.getElementById("utilityID").innerHTML = dataArray2[0].utility_id;
    document.getElementById("splitNum").innerHTML = dataArray2[0].tenant_num;
    document.getElementById("utilityComments").innerHTML = paymentComment;
    document.getElementById("utilityDelay").innerHTML = paymentDelay;
    document.getElementById("utilityReminder").innerHTML = paymentReminder;

  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view bill details --------------------

//----- Modal for view consumables details ------------------------------------

customElements.define(
  "consume-admin-modal",
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
          <ion-label><h2>TENANT ID</h2></ion-label>
          <ion-label><p id="consTentID">TT0001</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>ITEM NAME</h2></ion-label>
          <ion-label><p id="consItemName">Evian Bottle</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>FEE IMPOSED</h2></ion-label>
          <ion-label><p id="consLabel">$2.00</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>STATUS</h2></ion-label>
          <ion-label><p id="consStatus">Available</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>COMMENTS</h2></ion-label>
          <ion-label><p id="consComments">Fee Waivered</p></ion-label>
        </ion-item>
        
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createConsumablesAdminModal() {
  const modal = await modalController.create({
    component: "consume-admin-modal",
    cssClass: "consumeAdminModal",
  });

  var settings = {
    "url": `http://localhost:8080/api/admin/consumables/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var dataArray2 = JSON.parse(response);
    console.log(dataArray2);

    var consumeComments;

    if(dataArray2[0].cons_comments = "undefined"){
      consumeComments = "-";
      //console.log("consume was undefeinedd");
    }
    else{
      consumeComments = dataArray2[0].cons_comments;
    }

    document.getElementById("consTentID").innerHTML = dataArray2[0].tenant_id;
    document.getElementById("consItemName").innerHTML = dataArray2[0].cons_name;
    document.getElementById("consLabel").innerHTML = dataArray2[0].cons_label;
    document.getElementById("consStatus").innerHTML = dataArray2[0].cons_status;
    document.getElementById("consComments").innerHTML = consumeComments;
  });

  await modal.present();
  currentModal = modal;
}

//----- End of modal for view consumables details --------------------

//----- Modal for view admin inventory details ------------------------------------
customElements.define(
  "inv-admin-modal",
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
          <ion-label><h2>DONOR NAME</h2></ion-label>
          <ion-label><p id="adminInvDonorName">JACK TYLER | ID</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>ITEM</h2></ion-label>
          <ion-label><p id="adminInvItemName">KITCHEN SPOON | IT1234</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LOCATION</h2></ion-label>
          <ion-label><p id="adminInvLocation">TRANSITION PLUS @ <BR>JALAN BUKIT MERAH</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REPAIR FREQUENCY</h2></ion-label>
          <ion-label><p id="adminInvRepairFre">POLISHING | ONCE A MONTH | COMPLETED </p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REPAIR STATUS</h2></ion-label>
          <ion-label><p id="adminInvRepairSta">POLISHING | ONCE A MONTH | COMPLETED </p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>REPAIR TYPE</h2></ion-label>
          <ion-label><p id="adminInvRepairType">POLISHING | ONCE A MONTH | COMPLETED </p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>STATUS</h2></ion-label>
          <ion-label><p id="adminInvStatus">ISSUED</p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>STATUS HISTORY</h2></ion-label>
          <ion-label><p id="adminInvStaHist"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LOCATION HISTORY</h2></ion-label>
          <ion-label><p id="adminInvLocHist"></p></ion-label>
        </ion-item>
        <ion-item>
          <ion-label><h2>LAST UPDATE HISTORY</h2></ion-label>
          <ion-label><p id="adminInvDateHist"></p></ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    
    `;
    }
  }
);

//function to create tenant inventory modal
async function createInvAdminModal() {
  const modal = await modalController.create({
    component: "inv-admin-modal",
    cssClass: "invAdminModal",
  });

  var settings = {
    "url": `http://localhost:8080/api/admin/inventory/detail/${storedButtonID}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var dataArray2 = JSON.parse(response);
    console.log(dataArray2);

    document.getElementById("adminInvDonorName").innerHTML = dataArray2[0].donor_name + " | " + dataArray2[0].donor_id;
    document.getElementById("adminInvItemName").innerHTML = dataArray2[0].item_name + " | " + dataArray2[0].item_id;
    document.getElementById("adminInvLocation").innerHTML = dataArray2[0].item_location;
    document.getElementById("adminInvRepairFre").innerHTML = dataArray2[0].repair_frequency;
    document.getElementById("adminInvRepairSta").innerHTML = dataArray2[0].repair_status;
    document.getElementById("adminInvRepairType").innerHTML = dataArray2[0].repair_type;
    document.getElementById("adminInvStatus").innerHTML = dataArray2[0].item_status;

    for (var i = 0; i < dataArray2.length; i++){
      document.getElementById("adminInvStaHist").append(dataArray2[i].item_status+", ");
      document.getElementById("adminInvLocHist").append(dataArray2[i].item_location+", ");
      document.getElementById("adminInvDateHist").append(dataArray2[i].item_date+", ");
     
    }

  });

    
  await modal.present();
  currentModal = modal;
}

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
