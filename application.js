var config = {
    apiKey: "AIzaSyBwhkmQIwcn9e7_AFkqwPRjABasuzzyBGs",
    authDomain: "fantasy-5ff20.firebaseapp.com",
    databaseURL: "https://fantasy-5ff20.firebaseio.com",
    projectId: "fantasy-5ff20",
    storageBucket: "fantasy-5ff20.appspot.com",
    messagingSenderId: "651879388719"
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the comment's object in your Firebase database
var comments = firebase.database().ref("comments");


// Save a new comment to the database, using the input in the form
var submitComment = function () {

  var title = $("#yourName").val();
  var remark = $("#yourComment").val();
  var link = $("#yourLink").val();

  comments.push({
    "title": title,
    "remark": remark,
    "link": link
  });
};

comments.limitToLast(10).on('child_added', function(childSnapshot) {

  comment = childSnapshot.val();

  $("#title").prepend('<tr><td>' + comment.title + '</td></tr>' + '<br> <br>')
  $("#remark").prepend('<tr><td>' + comment.remark + '</td></tr>' + '<br> <br>')
  $("#link").prepend('<tr><td><img id="image"></td></tr>' + '<br> <br>')

  
  var altWords = 'No \n Image'  
  // Make the link actually work and direct to the URL provided
  $("#image").attr("src", comment.link)
  $("#image").attr("alt", altWords) 
});


// When the window is fully loaded, call this function.
$(window).load(function () {
  $("#commentForm").submit(submitComment);
});
