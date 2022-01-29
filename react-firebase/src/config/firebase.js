import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBfiUI_uafiWD-XQwDn1-0BIPmVZdMkSmo",
  authDomain: "test-project-e1486.firebaseapp.com",
  databaseURL: "https://test-project-e1486-default-rtdb.firebaseio.com",
  projectId: "test-project-e1486",
  storageBucket: "test-project-e1486.appspot.com",
  messagingSenderId: "635751228291",
  appId: "1:635751228291:web:5afae9c8e7e017fe3cccb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, update, onValue };
