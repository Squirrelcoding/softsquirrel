import React from "react";
import Link from "next/link";

/* 404 page component */
export default function PageNotFound() {
    return <>
        <h1>
            404 page not found
        </h1>
        <p>It appears that you are trying to access a page that does not exist, try the following:</p>
        <ul>
            <li>Check if you have entered the correct URL</li>
            <li>Contact us if you believe this is a mistake in our site</li>
            <li>
                <Link href="/" passHref>
                    <a style={{
                        color: "#428af5"
                    }}>Back to homepage</a>
                </Link>
            </li>
        </ul></>;
}
