const firebaseConfig = {
apiKey: "AIzaSyCm_EYOgxgyNnqqUsJwY6bdMFwpAUlmvFU",
authDomain: "myproject-57a0d.firebaseapp.com",
databaseURL: "https://myproject-57a0d-default-rtdb.firebaseio.com",
projectId: "myproject-57a0d",
storageBucket: "myproject-57a0d.appspot.com",
messagingSenderId: "203920087860",
appId: "1:203920087860:web:eb8fba62105bbdcdd9a361"
};
const app = initializeApp(firebaseConfig);
userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
function addRoom() { 
roomName = document.getElementById("roomName").value;
firebase.database().ref("/").child(roomName).update
({ purpose : "adicionar nome de sala" });
localStorage.setItem("roomName", roomName);
window.location = "kwitterPage.html"; }
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
roomNames = childKey;
console.log("Nome da Sala - " + roomNames);
row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>"; 
document.getElementById("output").innerHTML += row; }); }); }
getData();
function redirectToRoomName(name) 
{ console.log(name);
localStorage.setItem("roomName", name);
window.location = "kwitterPage.html"; }
function logout() { 
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html"; }