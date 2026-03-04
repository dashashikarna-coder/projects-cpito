import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyXB0RwCMqR9q7YLAqbLhmx3YNPXAEjA6g",
  authDomain: "projects-cpito.firebaseapp.com",
  projectId: "projects-cpito",
  storageBucket: "projects-cpito.firebasestorage.app",
  messagingSenderId: "50825848829",
  appId: "1:50825848829:web:a1bd777b49f655d39db94",
  measurementId: "G-7LMNVOPT5H"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);