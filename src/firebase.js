import firebase from 'firebase'
const firebaseConfig = {
      apiKey: "AIzaSyAx-xxkf5Dsq62gpMWKLL_T34AsQPywprU",
      authDomain: "twitterclone-e9fe4.firebaseapp.com",
      projectId: "twitterclone-e9fe4",
      storageBucket: "twitterclone-e9fe4.appspot.com",
      messagingSenderId: "658747222874",
      appId: "1:658747222874:web:75479bbfaa7692e827e163",
      measurementId: "G-JGK8BVG1KV"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;