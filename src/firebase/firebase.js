import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage'

const firebaseAuth = firebase.initializeApp({
  apiKey: "AIzaSyBZ-00dDpu2jYnw7zOursNetIwCmrU-xd0",
  authDomain: "doctory-c9232.firebaseapp.com",
  projectId: "doctory-c9232",
  storageBucket: "doctory-c9232.appspot.com",
  messagingSenderId: "758529816848",
  appId: "1:758529816848:web:d79e5932c7fe2acf2b8d95",
});

export const auth = firebaseAuth.auth();
export const db = firebaseAuth.firestore();
export const storge = firebaseAuth.storage()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebaseAuth;

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    const { firstName, lastName, userName, gender, category } = additionalData;
    try {
      await userRef.set({
        firstName,
        lastName,
        userName,
        email,
        gender,
        category,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log("Error in creating user", error);
    }
  }
};
