import React from "react";
import { Text } from '@mantine/core';
import TextLoop from "react-text-loop";
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

export default function MainText() {
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
      fontFamily: 'Poppins, sans-serif',
      fontSize: '75px'
    }} className="pt-24 pl-15 inline-block">
      
      {/** Component that loops through "Developing X" */}
      Developing  <TextLoop interval={2000}>
        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '75px'
        }}>
          websites
        </Text>
        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '75px'
        }}>
          CLI tools
        </Text>
        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '75px'
        }}>
          minecraft plugins
        </Text>
        <Text component="span" align="center" variant="gradient" gradient={{
          from: 'blue',
          to: 'violet',
          deg: 500
        }} weight={700} style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '75px'
        }}>
          the future
        </Text>
      </TextLoop>{" "}
    </Text>
    <br />
    <Parallax speed={-10}>
      <div className="absolute right-0 mr-40">
        <Image src="/drawing.svg" alt="placeholder" width={350} height={350} priority />
      </div>
    </Parallax></>;
}
