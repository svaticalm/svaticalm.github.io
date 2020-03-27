// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/7.9.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCurbvjR1WeuFnAcmfEql0eXLYLV2rPR1c",
    authDomain: "zemskidki-62629.firebaseapp.com",
    databaseURL: "https://zemskidki-62629.firebaseio.com",
    projectId: "zemskidki-62629",
    storageBucket: "zemskidki-62629.appspot.com",
    messagingSenderId: "529394168677",
    appId: "1:529394168677:web:bc3025b2a9e0257a32e78c"
});

const messaging = firebase.messaging();