import app from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

app.initializeApp(config);

const firestore = app.firestore();
const storage = app.storage();
const auth = app.auth();

export { firestore, auth, storage };
