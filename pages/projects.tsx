import Project from "@components/Project";
import { Button, Center } from "@mantine/core";
import { useState } from "react";
import { ProjectType } from "../lib/types";
import { GetStaticProps } from 'next';
import { getDoc, projectConverter } from "lib/helper";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useSpring } from "react-spring";




const Test = ({ data }: { data: ProjectType[] }) => {

    let [projectIndex, setProjectIndex] = useState(1);

    // React spring thingy
    const [styles, api] = useSpring(() => ({
            marginRight: 40
    }));
    api.start({ marginRight: 40 });

    return (
        <div>
            <Project info={data[projectIndex - 1]} styles={styles} />
            <br />
            <br />
            <br />
            <br />
            <Center>
                <Button onClick={() => {

                    if (projectIndex === 1) return;

                    // Start the slide-in animation
                    api.start({ from: {
                        marginRight: -300
                    } });

                    setProjectIndex(--projectIndex);
                }}><BiLeftArrow /></Button>

                
                <Button onClick={() => {
                    if (projectIndex === data.length) return;

                    // Start the slide-in animation
                    api.start({ from: {
                        marginRight: -300
                    } });

                    setProjectIndex(++projectIndex);
                }}><BiRightArrow /></Button>

            </Center>
        </div>
    );
}

export default Test;



export const getStaticProps: GetStaticProps = async (ctx) => {

    const data = await getDoc("SoftsquirrelPosts", "projects", projectConverter);

    return {
        props: {
            data
        }
    }
}