import { SimpleGrid } from "@mantine/core";
import {
    postSort,
    getDoc,
    paperLinkConverter,
    postLinkConverter,
    paperSort
} from "lib/helper";
import { PaperLink, PaperType, PostLink } from "lib/types";
import Link from "next/link";

const resources = ({ docsData, tutorialsData, papersData }: {
    docsData: PostLink[],
    tutorialsData: PostLink[],
    papersData: PaperLink[]
}) => {

    return (
        <>
            <h1>Softsquirrel Resources</h1>

            <div className="m-4 p-8">
                <div className="inline-block p-4 align-middle">
                    <h2>Documentation</h2>
                    <SimpleGrid cols={1}>
                        {

                            docsData.map(postLink => {
                                return <Link key={
                                    postLink.time
                                }
                                    href={
                                        `/mdviewer/${postLink.slug
                                        }?type=docs&back=resources`
                                    }>
                                    {
                                        postLink.title
                                    }</Link>
                            })

                        } </SimpleGrid>
                </div>

                { <div className="inline-block p-4 align-middle ml-96">
                    <h2>Tutorials</h2>
                    <SimpleGrid cols={1}>
                        {
                        tutorialsData.map(postLink => {
                            return <Link key={
                                postLink.time
                            }
                                href={
                                    `/mdviewer/${postLink.slug
                                    }?type=tutorials&back=resources`
                                }>
                                {
                                    postLink.title
                                }</Link>
                        })
                    } </SimpleGrid>
                </div> } 
                </div>

            { <div className="m-4 p-8">
                <div className="inline-block p-4 align-middle">
                    <h2>Papers - University of Softsquirrel</h2>

                    <h3>Mathematics</h3>
                    <SimpleGrid cols={1}>
                        {

                            papersData.filter(paper => paper.type === PaperType.Mathematics).map(paperLink => {

                                return <Link key={
                                    paperLink.time
                                }
                                    href={
                                        `/papers/${paperLink.slug
                                        }.pdf`
                                    }>
                                    {`${paperLink.title}`}</Link>
                            })
                        }
                         </SimpleGrid>

                        <h3>Computer Science</h3>
                        <SimpleGrid cols={1}>
                        {


                            papersData.filter(paper => paper.type === PaperType.ComputerScience).map(paperLink => {

                                return <Link key={
                                    paperLink.time
                                }
                                    href={
                                        `/papers/${paperLink.slug
                                        }.pdf`
                                    }>
                                    {`${paperLink.title}`}</Link>
                            })
                        }
                         </SimpleGrid>
                </div>
            </div> } </>
    );
};

export default resources;

/**
 * Function to get post data from the database
 * Am I using JSdoc right? Its my first time.
 * @returns {Promise<{props:{data: admin.firestore.DocumentData;keys: string[];};revalidate: number;}>} Post data with keys
 */
export async function getStaticProps() {
    // Initiate database handler

    // Get the data for each type of post

    const docsData = await getDoc("SoftsquirrelPosts", "docs", postLinkConverter);
    const tutorialsData = await getDoc("SoftsquirrelPosts", "tutorials", postLinkConverter);
    const papersData = await getDoc("SoftsquirrelPosts", "papers", paperLinkConverter);


    docsData.sort(postSort);
    tutorialsData.sort(postSort);
    papersData.sort(paperSort);

    return {
        props: {
            docsData,
            tutorialsData,
            papersData
        },
        revalidate: 120
    };
}
