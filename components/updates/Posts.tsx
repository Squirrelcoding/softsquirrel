import { SimpleGrid, Card } from "@mantine/core";
import Link from "next/link";
import React from "react";

/**
 * Component for blog posts
 * Takes the post data and keys
 */
export default function Posts(props: any) {

  /**
   * Turns unix time into string "Posted MM DD, YY"
   * @param unixTime 
   * @returns {string} - Readable date format
   */
  function toReadableTime(unixTime: number): string {
    var date = new Date(unixTime);
    var year = date.getUTCFullYear();
    var month: number | string = date.getUTCMonth() + 1;
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
    var day = date.getUTCDate();
    var dateString = `Posted ${month} ${day}, ${year}`;
    return dateString;
  }
  return (
    <>
      {/** Using SimpleGrid to organize the blog posts */}
      <SimpleGrid cols={3}>

        {/** Loops through the sorted array of posts and displays the corresponding post */}
        {props.keys.map((key: any, i: any) => {
          return (
            <Link key={i} href={`/post/${props.data[key].url}`} passHref>
              <Card style={{
                minHeight: 200,
                cursor: "pointer"
              }}>
                <h2>{props.data[key].title}</h2>
                <p>Posted {toReadableTime(props.data[key].time * 1000)}</p>
              </Card>
            </Link>
          )
        }


        )
        }

      </SimpleGrid>
    </>
  )
}
