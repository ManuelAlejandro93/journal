// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAXtUkWxsV9trovdFR0mkzKvLoiJrfhc4s',
  authDomain: 'journal-app-manuel.firebaseapp.com',
  projectId: 'journal-app-manuel',
  storageBucket: 'journal-app-manuel.firebasestorage.app',
  messagingSenderId: '746269764227',
  appId: '1:746269764227:web:f9129fa6a282da2f9789b6'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
