/* Animation Movement Between Username, Password and Submit Button*/
var current = null;
document.querySelector('#username').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path', /* targets the path tag in the html file*/
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386', /* visible line and invisible gap*/
      duration: 700,     /* How long the animation takes to be performed*/
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#enter').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
/*--------------------------------------------------------------------------------------*/
/* Validate user input*/

function getElement() {
  var username = document.getElementById("username").value;
  var lngthusername = username.length;
  if (username == "" || lngthusername < 3) {
    document.getElementById("lblusn").style.color = "red";
    document.getElementById("line").style.stroke = "red";
  }
  var password = document.getElementById("password").value;
  var lngthpassword = password.length;
  if (password == "" || lngthpassword < 3) {
   document.getElementById("lblpsw").style.color = "red";
   document.getElementById("line").style.stroke = "red";
  }
  if (lngthusername >= 3 & lngthpassword >= 3) {
    document.getElementById("lblusn").style.color = "lime";
    document.getElementById("lblpsw").style.color = "lime";
    document.getElementById("line").style.stroke = "lime";
    setTimeout(assignNewPage, 3000);   //waits 3 seconds then calls assignNewPage function
  }

  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error : " + errorMessage);
  // ...
  });

  function assignNewPage() {
    window.location.assign("file:///D:/WS2/Main_Menu.html"); //loads a new document
  }

 /*--------------------------------------------------------------------------------------*/
 /* User input submission*/

 // Combine username and password into one JSON Object
 // Send JSON Object to Database 
 // CORS is a bloody nightmare
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    alert("Change login to name");
    var myObj = JSON.parse(this.responseText);
    document.getElementById("login").innerHTML = myObj.name;
  }
 };

  xmlhttp.open("GET", "db.txt", true);
  xmlhttp.send();
  alert(headers);
}

/*-----------------------------------------------------------------------------------------*/
/* Firebase get currently signed in user */

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("login").style.display = "none";
    document.getElementById("loggedin").style.display = "block";

  } else {
    // No user is signed in.
    document.getElementById("login").style.display = "block";
    document.getElementById("loggedin").style.display = "none";
  }
});