import { SimpleGrid, Card } from "@mantine/core";
import { PostLink } from "lib/types";
import Link from "next/link";
import React from "react";



/**
 * Component for blog posts
 * Takes the post data and keys
 */
export default function Posts({ props }: {
    props: PostLink[]
}) { /**
	 * Turns unix time into string "Posted MM DD, YY"
	 * @param unixTime
	 * @returns {string} - Readable date format
	 */
    const toReadableTime = (unixTime: number): string => {
        const date = new Date(unixTime);
        const year = date.getUTCFullYear();
        let month: number | string = date.getUTCMonth() + 1;
        switch (month) {
            case 1:
                month = "January"
                break;
            case 2:
                month = "Febuary"
                break;
            case 3:
                month = "March"
                break;
            case 4:
                month = "April"
                break;
            case 5:
                month = "May"
                break;
            case 6:
                month = "June"
                break;
            case 7:
                month = "July"
                break;
            case 8:
                month = "August"
                break;
            case 9:
                month = "September"
                break;
            case 10:
                month = "October"
                break;
            case 11:
                month = "November"
                break;
            case 12:
                month = "December"
                break;
        }
        const day = date.getUTCDate();
        const dateString = `Posted ${month} ${day}, ${year}`;
        return dateString;
    }

    console.log(props);
    
    return (
        <> {" "}
            {/** Using SimpleGrid to organize the blog posts */}
            <SimpleGrid cols={3}>
                {/** Loops through the sorted array of posts and displays the corresponding post */}
                {
                    props.map((post) => {


                        return <Link key={
                            post.time
                        }
                            href={
                                `/mdviewer/${post.slug
                                }?type=newposts&back=updates`
                            }
                            passHref>
                            <Card style={
                                {
                                    minHeight: 200,
                                    cursor: "pointer"
                                }
                            }>
                                <h2>{
                                    post.title
                                }</h2>
                                <p>{
                                    toReadableTime(post.time * 1000)
                                }</p>
                            </Card>
                        </Link>;
                    })
                }
                {" "} </SimpleGrid>
        </>
    );
}
