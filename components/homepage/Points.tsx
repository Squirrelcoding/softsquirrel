import React from "react";
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import { animated, useSpring } from "react-spring";
/** Component which showcases our main selling points and our projects */
export default function Points() {

  const mathStyles = useSpring({
      loop: true,
      delay: 3,
      config: {
        tension: 5,
        friction: 2
      },
      from: {
        marginLeft: 41,
        marginTop: 15,
      },
      to: [
        {
          marginLeft: 45,
          marginTop: 20,
        },
        {
          marginLeft: 50,
          marginTop: 10,
        },
        {
          marginLeft: 45,
          marginTop: 15,
        },
        {
          marginLeft: 40,
          marginTop: 20,
        }
      ]
  });


  return <> <div className="ml-10">
    <p className="text-5xl font-medium">Who we are</p>
    <p style={{
      wordWrap: "break-word",
      width: 600,
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
      <p className="text-5xl font-medium">Mathematics</p>
      <p style={{
        wordWrap: "break-word",
        width: 600
      }}>Softsquirrel Studios consists of the most elite scientists in todays world. Together, they have developed the most efficient software known to man. They have published papers that make major breakthroughs in the realm of Mathematics and Computer Science, saving millions of lives in the process.</p>
    </div>
      <div>
      <animated.div style={mathStyles} className="ml-10 mt-30">
        <Image src="/frontPage/math.svg" alt="placeholder" width={427} height={360} />
      </animated.div>  
      </div>
    <br />
    <br />
    <br />
    <Parallax speed={-10}>
      <div className="absolute right-0 mr-10">
        <Image src="/frontPage/bunnny.png" alt="placeholder" width={480} height={270} className="rounded" />
      </div>
    </Parallax>
    <div className="ml-10">
      <p className="text-5xl font-medium">PNGme implementation</p>
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
