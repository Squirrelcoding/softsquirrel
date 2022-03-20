import { SimpleGrid } from "@mantine/core";
import admin from 'firebase-admin';
import { key } from '../pages/api/key';
import Link from "next/link";
const resources = ({ docPostData, docPostKeys, tutorialPostsData, tutorialPostKeys }: any) => {

    return (
        <>
            <h1>Softsquirrel Resources</h1>

            <div className="m-4 p-8">
                <div className="inline-block p-4 align-middle">
                    <h2>Documentation</h2>
                    <SimpleGrid cols={1} >
                        {docPostKeys.map((val: any, key: any) => 
                                <Link href={`/mdviewer/${docPostData[val].url}?type=docs&back=resources`} key={key}>
                                    {docPostData[val].title}
                                </Link>
                            
                            )}
                    </SimpleGrid>
                </div>

                <div className="inline-block p-4 align-middle ml-96">
                    <h2>Tutorials</h2>
                    <SimpleGrid cols={1} >
                        {tutorialPostKeys.map((val: any, key: any) => {
                            return (
                                <Link key={key} href={`/mdviewer/${tutorialPostsData[val].url}?type=tutorials&back=resources`}>{tutorialPostsData[val].title}</Link>
                            )
                        })}
                    </SimpleGrid>
                </div>
            </div>

        </>
    );
}

export default resources;


/**
 * Function to get post data from the database
 * Am I using JSdoc right? Its my first time.
 * @returns {Promise<{props:{data: admin.firestore.DocumentData;keys: string[];};revalidate: number;}>} Post data with keys
 */
export async function getStaticProps() {

    // Initiate database handler
    const keyy = key as admin.ServiceAccount;
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: admin.credential.cert(keyy),
            databaseURL: "https://poopnet-4fb22.firebaseio.com"
        });
    }
    const db = admin.firestore();

    // Get a reference to the documents with post info and get the data in an object
    const ref = db.collection("SoftsquirrelPosts").doc("docs");
    const docPostData = (await ref.get()).data() ?? {};

    const tutorialPostsRef = db.collection("SoftsquirrelPosts").doc("tutorials");
    const tutorialPostsData = (await tutorialPostsRef.get()).data() ?? {};
    // This line of code takes the [time] (unix timestamp) property from each post, and sorts them from most recent to oldest
    const docPostKeys: Array<string> = Object.keys(docPostData).sort((a: any, b: any) => docPostData[b].time - docPostData[a].time);
    const tutorialPostKeys: Array<string> = Object.keys(tutorialPostsData).sort((a: any, b: any) => tutorialPostsData[b].time - tutorialPostsData[a].time);
    // Returns the data with keys to sort them.
    return {
        props: {
            docPostData,
            docPostKeys,
            tutorialPostsData,
            tutorialPostKeys
        },
        revalidate: 120,
    }
}