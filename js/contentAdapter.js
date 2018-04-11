// pageID variable to load content of specific blogPost
var path = localStorage.getItem("pageID");




//// Firebase JS API 
var config = {
    apiKey: "AIzaSyCGlU1CKNhRcQtNKUKEzIE_d3S45c7nqU4",
    authDomain: "blogtraveo-d000d.firebaseapp.com",
    databaseURL: "https://blogtraveo-d000d.firebaseio.com",
    projectId: "blogtraveo-d000d",
    storageBucket: "blogtraveo-d000d.appspot.com",
    messagingSenderId: "215037101174"
  };
  firebase.initializeApp(config);


const preObject = document.getElementById("x_container");
const dbRef1 = firebase.database().ref().child(path);
dbRef1.on('value',function(datasnapshot){
    
    data = datasnapshot.val();  
    var htmlText = '';    
    htmlText += '<p class="x_title">' + data.title + '</p>';
    htmlText += '<p class="x_descritpion">' + data.content + '</p>';            
    preObject.innerHTML = htmlText;
    
})



