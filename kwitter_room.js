

var firebaseConfig = {
      apiKey: "AIzaSyCK4wEmJqb_U3sh8CiJOtBviA_JO_K-SFM",
      authDomain: "kwitter-d93a1.firebaseapp.com",
      databaseURL: "https://kwitter-d93a1-default-rtdb.firebaseio.com",
      projectId: "kwitter-d93a1",
      storageBucket: "kwitter-d93a1.appspot.com",
      messagingSenderId: "563606395765",
      appId: "1:563606395765:web:1d539fed7fd3b87b30913c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id) '>#"+Room_names+"</div><hr>";           
      document.getElementById("output").innerHTML +=row    ;    
      
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location= "kwitter_page.html";
}
function redirectToRoomName(){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"

}
