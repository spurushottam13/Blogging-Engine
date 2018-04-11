// Firebase Initialize
var config = {
    apiKey: "AIzaSyCGlU1CKNhRcQtNKUKEzIE_d3S45c7nqU4",
    authDomain: "blogtraveo-d000d.firebaseapp.com",
    databaseURL: "https://blogtraveo-d000d.firebaseio.com",
    projectId: "blogtraveo-d000d",
    storageBucket: "blogtraveo-d000d.appspot.com",
    messagingSenderId: "215037101174"
  };
  firebase.initializeApp(config);


function blog(){
// Firebase -- code for loading data
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
   var description = content.substring(0,500);
    console.log(content);
    console.log(title);
    const send = firebase.database().ref().push().set({
        title: title,
        content : content,
        description: description,
    })  
    alert("posted");
    var form = document.getElementById("post");
    form.reset();
}