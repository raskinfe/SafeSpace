var loggedIn = false;

function authenticate() {
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  loggedIn = check(password, username);
  status();

}


function check(password, username) {
  if (username == "" || password =="") {

    return false;
  }
  else {
    return true;
  }
}

function status() {
  if (loggedIn) {


    var url = "../www/html/tabs.html";

    window.open(url);
  }
  else {
    alert("Please enter the correct values!")
  }
}