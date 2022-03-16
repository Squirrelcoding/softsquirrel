import admin from 'firebase-admin';
import {key} from '../pages/api/key';

/** Initiate database client */
const keyy = key as admin.ServiceAccount;
if (admin.apps.length === 0) {  
  admin.initializeApp({
    credential: admin.credential.cert(keyy),
    databaseURL: "https://poopnet-4fb22.firebaseio.com"
  });
}
const db = admin.firestore();

/**
 * Function to search database and create a new account if user is new.
 * @param {string} email - gmail of user
 */
export async function accountExists(email: string) {
  /** get reference to user account */
  const ref = db.collection("softsquirrel").doc(email);
  const doc = await ref.get();

  /** If the document for the user is not found, it creates a new document for the user */
  if (!doc.exists) {
    await ref.set({
      username: email
    }, {merge:true})
  }
  return;
}