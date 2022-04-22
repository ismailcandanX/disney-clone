import firebase from 'firebase/compat/app'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyAEVGa6Z4jwc16IlbnKrrSLriUkDPUYAYY',
  authDomain: 'disneyplus-clone-6fd11.firebaseapp.com',
  projectId: 'disneyplus-clone-6fd11',
  storageBucket: 'disneyplus-clone-6fd11.appspot.com',
  messagingSenderId: '690526184268',
  appId: '1:690526184268:web:8df8562a599635c78f65e9',
  measurementId: 'G-L5Y08J6W8Y',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const storage = getStorage();
// const storageRef = ref(storage);

export { auth, provider, storage }
export default db
