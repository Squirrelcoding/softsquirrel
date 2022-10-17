import { PaperLink, PaperType, PostLink, ProjectType } from "./types";
import { key } from "../pages/api/key";
import admin from "firebase-admin";

/** A converter type for type-safe firestore */
interface Converter<T> {
  toFirestore: (data: T[]) => T[],
  fromFirestore: (data: FirebaseFirestore.QueryDocumentSnapshot) => T[];
}

export const postLinkConverter: Converter<PostLink> = {
  toFirestore: (data: PostLink[]) => data,
  fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) => {
    let data = snap.data();
    let list: PostLink[] = [];
    Object.keys(data).forEach(key => list.push(data[key]));
    return list;
  }
}

export const paperLinkConverter: Converter<PaperLink> = {
  toFirestore: (data: PaperLink[]) => data,
  fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) => {

    let data = snap.data();
    let list: PaperLink[] = [];


    // data[key] refers to the current paper link object
    Object.keys(data).forEach(key => {

      // Convert the string to an enum
      switch (data[key].type) {
        case "Mathematics":
          data[key].type = PaperType.Mathematics;
          break;
        case "CS":
          data[key].type = PaperType.CS;
          break;
        default:
          data[key].type = PaperType.Other;
      }

      // Push the modified object
      console.log(data[key].type);

      list.push(data[key]);
    });

    return list;
  }
}

export const projectConverter: Converter<ProjectType> = {
  toFirestore: (data: ProjectType[]) => data,
  fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) => {
    let data = snap.data();
    let list: ProjectType[] = [];
    Object.keys(data).forEach(key => list.push(data[key]));
    return list;
  }
}

/** Get a handler to the database */
export const getDbHandler = () => {
  const keyy = key as admin.ServiceAccount;

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(keyy),
      databaseURL: "https://poopnet-4fb22.firebaseio.com",
    });
  }
  return admin.firestore();
}


/** Fetches a document and takes in a converter */
export const getDoc = async <T>(collection: string, doc: string, converter: Converter<T> | null = null) => {

  const db = getDbHandler();

  const ref = db.collection(collection).doc(doc);

  let data;

  if (converter) {
    data = (await ref.withConverter(converter).get()).data()!;
  } else {
    data = (await ref.get()).data()!;
  }

  return data;
}


export const postSort = (a: PostLink, b: PostLink) => a.time - b.time;
export const paperSort = (a: PaperLink, b: PaperLink) => a.time - b.time;