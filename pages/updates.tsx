import dynamic from 'next/dynamic';
import { useUser } from '@auth0/nextjs-auth0';
import { getDoc, postLinkConverter, postSort } from 'lib/helper';
import { PostLink } from 'lib/types';

// Lazy load post components
const Posts = dynamic(() => import('@components/updates/Posts'));

/** 
 * Posts page component
 */
export default function Blog({ data }: { data: PostLink[] }) {

    /** Get user handler */
    const { user } = useUser();


   // If the user isnt logged in, tell user to log in
    if (!user) {
        return <p>
            The blog is only available to users with accounts, create one for free by clicking <i>Log in</i> on the right!
        </p>
    }
    return (
        <>
          <Posts props={data}/>
        </>
    )
}

/**
 * Function to get post data from the database
 * Am I using JSdoc right? Its my first time.
 * @returns {Promise<{props:{data: admin.firestore.DocumentData;keys: string[];};revalidate: number;}>} Post data with keys
 */
export async function getStaticProps() {

    // Get series of post links in an array
    const data: PostLink[] = (await getDoc("SoftsquirrelPosts", "newposts", postLinkConverter)).sort(postSort);

    // Returns the data with keys to sort them.
    return {
        props: {
            data,
        },
        revalidate: 120,
    }
}