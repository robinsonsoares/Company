const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
  apiKey: "AIzaSyANMT8tp55FUOYu59Z3bbp6oYQ9aTsq7vc",
  authDomain: "xumes-portfolio-85aa8.firebaseapp.com",
  databaseURL: "https://xumes-portfolio-85aa8.firebaseio.com",
  projectId: "xumes-portfolio-85aa8",
  storageBucket: "xumes-portfolio-85aa8.appspot.com",
  messagingSenderId: "73604856988"
}

const app = firebase.initializeApp(FirebaseConfig)
const config = Rebase.createClass(app.database())

export const storage = app.storage()
export default config