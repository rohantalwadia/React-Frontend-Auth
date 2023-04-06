import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkZy9xyhITpUvCQLET4zVGcJpbUKjJyJQ",
  authDomain: "sa-l-e-t.firebaseapp.com",
  projectId: "sa-l-e-t",
  storageBucket: "sa-l-e-t.appspot.com",
  messagingSenderId: "229537568053",
  appId: "1:229537568053:web:426d6abba27637a068e87c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
