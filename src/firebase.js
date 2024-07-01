
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
  const firebaseConfig = {
    apiKey: "AIzaSyBD23Sf1atedipzrzWp5rNRelHW39BBCRY",
    authDomain: "crud-3c102.firebaseapp.com",
    projectId: "crud-3c102",
    storageBucket: "crud-3c102.appspot.com",
    messagingSenderId: "367002049631",
    appId: "1:367002049631:web:07bd9a31d42407cf428fea"
  };
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export default app;
