// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase, onValue, ref} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCswEiMbWHVDmyE86UKuvNmCQrAl1bxxkI",
   authDomain: "message-board-df60e.firebaseapp.com",
   databaseURL: "https://message-board-df60e-default-rtdb.firebaseio.com/",
   projectId: "message-board-df60e",
   storageBucket: "message-board-df60e.appspot.com",
   messagingSenderId: "458322825640",
   appId: "1:458322825640:web:53fdf0da16def575d98d9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
   signInWithPopup(auth, provider)
      .then((result) => {
         const name = result.user.displayName;
         const email = result.user.email;
         const profilePic = result.user.photoURL;
         const uid = result.user.uid
         console.log(result.user)
         
         localStorage.setItem("name", name)
         localStorage.setItem("email", email)
         localStorage.setItem("profilePic", profilePic)
         localStorage.setItem("uid", uid)
      }).then(() => {
         const db = getDatabase()
         const infoRef = ref(db, 'users/' + localStorage.getItem("uid") + '/teams');
         onValue(infoRef, (snapshot) => {
            const data = snapshot.val();          
       })
      })
      .catch((error) => {
         console.log(error)
      })
}