import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMV1Gz_BqC2wB85wPRl1J8VXqC_TTM1Ms",
  authDomain: "fir-auth-d309d.firebaseapp.com",
  projectId: "fir-auth-d309d",
  storageBucket: "fir-auth-d309d.appspot.com",
  messagingSenderId: "509843520936",
  appId: "1:509843520936:web:91b3c6f74cd9b59dddf19d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
