
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

    // Fectching data from DB
const preObject = document.getElementById("x_container");
const dbRef1 = firebase.database().ref();
dbRef1.on('value',function(datasnapshot){
    data = datasnapshot.val();
    var htmlText = '';
        for ( var key in data ) {
            htmlText += '<p class="x_title">' + data[key].title + '</p>';
            htmlText += '<p class="x_descritpion">' + data[key].description + '</p>';
            htmlText += '<p class="x_button" id="'+key+'"onclick="loadContent(this.id)"> Read more </p>';
        }
    preObject.innerHTML = htmlText;
})
    
     //Code for redirect the ReadMore button
function loadContent(id) {
    localStorage.setItem("pageID",id);
    window.location.href = "content.html";
}

