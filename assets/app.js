// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzrk9G8vl1SrTmbgJtL8w7_ZJ_astIPwM",
    authDomain: "train-schedule-5d8d3.firebaseapp.com",
    databaseURL: "https://train-schedule-5d8d3.firebaseio.com",
    projectId: "train-schedule-5d8d3",
    storageBucket: "train-schedule-5d8d3.appspot.com",
    messagingSenderId: "592806784248"
  };
  firebase.initializeApp(config);

  var database = firebase.database();