import dynamic from 'next/dynamic';
const PageNotFound = dynamic(() => import('@components/app/PageNotFound'));

/** 404 page */
export default function page() {

    return (
        <>
            {/** Render lazy-loaded 404 page component */}
            <PageNotFound />
        </>
    );
}