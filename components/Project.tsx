import { Badge, Button, Center } from "@mantine/core";
import { ProjectType } from "lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { animated, SpringValue } from "react-spring";

interface SpringStyles {
    image: {
        marginRight: SpringValue<number>;
    },
    text: {
        opacity: SpringValue<number>;
    }
}


const Project = ({ info, styles }: { info: ProjectType, styles: any }) => {


    return (
        <>
            <p className="text-center text-6xl mb-3"> {info.title}</p>

            {info.isNew &&
                <Center>
                    <Badge color="blue" variant="light" >
                        new
                    </Badge>
                </Center>
            }
            {!info.isMaintained &&
                <Center>
                    <Badge color="blue" variant="light" >
                        unmaintained
                    </Badge>
                </Center>
            }

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >

                <animated.div style={styles}>
                    <Image src={info.thumbnailLink} alt={info.title} width={info.thumbnailWidth} height={info.thumbnailHeight} />
                </animated.div>

            </div>

            <p style={{
                wordWrap: "break-word",
                width: 600
            }}>{info.description}</p>


            {
                (info.github && typeof window !== "undefined") &&

                <div style={{
                    marginLeft: window.screen.height,
                    marginTop: -60
                }}>
                    <Link href={info.github} passHref>

                        <Button leftIcon={<AiFillGithub size={23} />}>Github</Button>
                    </Link>
                </div>
            }

            {
                (info.directLink && typeof window !== "undefined") &&

                <div style={{
                    marginLeft: window.screen.height,
                    marginTop: -100
                }}>
                    <Link href={info.directLink} passHref>

                        <Button leftIcon={<CgWebsite size={23} />}>Website</Button>
                    </Link>
                </div>
            }

        </>
    );
}


export default Project;