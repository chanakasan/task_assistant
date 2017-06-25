import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBYtrRBgJo87ETYiOVs61vp02QeMUqHzXk",
  authDomain: "task-assistant.firebaseapp.com",
  databaseURL: "https://task-assistant.firebaseio.com",
  projectId: "task-assistant",
  storageBucket: "",
  messagingSenderId: "747252980992"
};

firebase.initializeApp(config);

ReactDOM.render(<Root />, document.getElementById('root'))
