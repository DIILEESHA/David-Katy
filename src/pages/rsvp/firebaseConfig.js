// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU_X-8ZlKexISWpDpkjPVqofumYQcRDlI",
  authDomain: "david34-5a90b.firebaseapp.com",
  projectId: "david34-5a90b",
  storageBucket: "david34-5a90b.firebasestorage.app",
  messagingSenderId: "935892852821",
  appId: "1:935892852821:web:f8bd253fe5a6c02d6cb4dc",
  measurementId: "G-CJ6RTLHW8P"
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// export firestore helpers
const db = getFirestore(app);

/**
 * Save an RSVP to Firestore
 * @param {Object} data - the RSVP data to save
 * @returns {Promise<DocumentReference>}
 */
export async function saveRSVP(data) {
  const docRef = await addDoc(collection(db, "rsvps"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef;
}

export { db };
