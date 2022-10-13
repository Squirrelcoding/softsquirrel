import dynamic from 'next/dynamic';
import { useUser } from '@auth0/nextjs-auth0';
import { getDbHandler } from 'lib/helper';

/** Lazy load post components */
const Posts = dynamic(() => import('@components/updates/Posts'));

/** 
 * Posts page component
 */
export default function Blog({ data, keys }: any) {

    /** Get user handler */
    const { user } = useUser();

   /**
    * If the user isnt logged in, tell user to log in
    */
    if (!user) {
        return <p>
            The blog is only available to users with accounts, create one for free by clicking <i>Log in</i> on the right!
        </p>
    }
    return (
        <>
        {// Show posts in post component
        }
          <Posts data={data} keys={keys}/>
        </>
    )
}

/**
 * Function to get post data from the database
 * Am I using JSdoc right? Its my first time.
 * @returns {Promise<{props:{data: admin.firestore.DocumentData;keys: string[];};revalidate: number;}>} Post data with keys
 */
export async function getStaticProps() {

    // Initiate database handler
    const db = getDbHandler();

    // Get a reference to the document with post info and get the data in an object
    const ref = db.collection("SoftsquirrelPosts").doc("newposts");
    const data = (await ref.get()).data()!;

    // This line of code takes the [time] (unix timestamp) property from each post, and sorts them from most recent to oldest
    const keys: string[] = Object.keys(data).sort((a:any, b:any) => data[b].time - data[a].time);

    // Returns the data with keys to sort them.
    return {
        props: {
            data,
            keys
        },
        revalidate: 120,
    }
}