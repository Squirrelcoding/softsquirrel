import React from "react";
import { Text } from '@mantine/core';
import { TextLoop } from "react-text-loop-next";
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import { useSpring, animated } from "react-spring";

export default function MainText() {

  const props = useSpring({ to: { marginRight: 140 }, from: { marginRight: -300 } })


  return <>

    {/** Text displaying "Developing X" 
     * It loops through the various substitutions for X with the help of react-text-loop
     * Most of the code is just styling the text
    */}
    <Text component="span" align="center" variant="gradient" gradient={{
      from: 'blue',
      to: 'violet',
      deg: 300
    }} weight={700} style={{
      fontSize: '75px'
    }} className="pt-24 pl-15 inline-block">

      {/** Component that loops through "Developing X" */}
      Developing  <TextLoop interval={2000}>
        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontSize: '75px'
        }}>
          websites
        </Text>
        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontSize: '75px'
        }}>
          CLI tools
        </Text>
        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontSize: '75px'
        }}>
          Minecraft plugins
        </Text>

        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontSize: '75px'
        }}>
          real-world solutions
        </Text>

        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontSize: '75px'
        }}>
          server software
        </Text>

        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontSize: '75px'
        }}>
          applications
        </Text>

        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontSize: '75px'
        }}>
          the future
        </Text>

      </TextLoop>{" "}
    </Text>
    <br />
    <animated.div style={props}>
    <Parallax speed={-10}>
      <div className="absolute right-0">
        <Image src="/ss_logo.svg" alt="placeholder" width={350} height={350} priority />
      </div>
    </Parallax>
    </animated.div>


  </>
}
