import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import {key} from './key';

/** Initiate database client */
const keyy = key as admin.ServiceAccount;
if (admin.apps.length === 0) {  
  admin.initializeApp({
    credential: admin.credential.cert(keyy),
    databaseURL: "https://poopnet-4fb22.firebaseio.com"
  });
}
const db = admin.firestore();
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const ref = db.collection("softsquirrel").doc(req.body.type);
    const doc = await ref.get();
    const data = doc.data();
    let array = [];
    for (const property in data) {
        array.push({
            time: data[property].time,
            title: data[property].title,
            url: data[property].url,
        });
    }
    res.status(200).json({
        docPosts: array
    });
}