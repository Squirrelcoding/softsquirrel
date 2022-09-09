import React from "react";
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
/** Component which showcases our main selling points and our projects */
export default function Points() {
  return <> <div className="ml-10">
    <h1 className="text-5xl">Who we are</h1>
    <p style={{
      wordWrap: "break-word",
      width: 600
    }}>We develop all sorts of software from minecraft mods to websites to servers, welcome to the main website which represents what we do and our accomplishments! Here you can look at what we are currently working on, our past projects and more.</p>
  </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="absolute right-0 mr-10">
      <h1 className="text-5xl">Pro Poop+</h1>
      <p style={{
        wordWrap: "break-word",
        width: 600
      }}>Pro Poop+ is an exclusive website for exclusive fans of the american youtube channel known as Pro Poop. He creates Minecraft and miscallaneous content. However upon realizing that one needs at least 1000 subscribers to make a youtube membership, he contacted Softsquirrel Studios and we took things into our own hands.</p>
    </div>
    <Parallax speed={10}>
      <div className="ml-10">
        <Image src="/a.jpg" alt="placeholder" width={480} height={270} />
      </div>
    </Parallax>
    <br />
    <br />
    <br />
    <Parallax speed={-10}>
      <div className="absolute right-0 mr-10">
        <Image src="/bunnny.png" alt="placeholder" width={480} height={270} className="rounded"/>
      </div>
    </Parallax>
    <div className="ml-10">
      <h1 className="text-5xl">PNGme implementation</h1>
      <p style={{
        wordWrap: "break-word",
        width: 600
      }}>Ever dreamed of being able to communicate plans for crimes in cute bunny pictures? Well, we recently developed a program that does just this, <i>and</i> it&apos;s easy to use! Just enter the file name, a 4 letter ID, and the payload! What if I told you the cool bunny on the right had some criminal plan hidden in it with the chunk code &quot;test&quot;?</p>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br /></>;
}
