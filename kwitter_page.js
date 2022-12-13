var firebaseConfig = {
    apiKey: "AIzaSyDj3BtXQcFKQAVdRr5FuffZqHVD0r857EM",
    authDomain: "kwitter-31f6e.firebaseapp.com",
    databaseURL: "https://kwitter-31f6e-default-rtdb.firebaseio.com",
    projectId: "kwitter-31f6e",
    storageBucket: "kwitter-31f6e.appspot.com",
    messagingSenderId: "723646979391",
    appId: "1:723646979391:web:a7e78813b85ac034d4078a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name = localStorage.getItem("user_name");
  var room_name = localStorage.getItem("roomname");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").innerHTML="";
  }

  