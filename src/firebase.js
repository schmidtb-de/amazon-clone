import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBGZGpvEk7kFkF472VFRnMBE8RzObvJFFI",
  authDomain: "clone-c74e4.firebaseapp.com",
  projectId: "clone-c74e4",
  storageBucket: "clone-c74e4.appspot.com",
  messagingSenderId: "626122974604",
  appId: "1:626122974604:web:ffcbc4fe2ca75f564e62a9",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
