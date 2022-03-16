import { Card, Button, Text } from "@mantine/core";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

/** Component for showing this project. Used in pages/projects.tsx */
export default function PPP({ }) {
  return <Card shadow="sm" padding="xl" >
    <Card.Section>
      <h1 className="ml-5">Pro Poop+</h1>
    </Card.Section>
    <Text weight={500} size="md">
      A streaming site dedicated to Pro Poop, completed with authentication, blog posts, and more. Sign up today! Wait you cant- it broke and we dont feel like fixing it.
    </Text>
    <Card.Section className="mb-1 mt-1" style={{
      marginLeft: "1px"
    }}>
      <Button component="a" href="https://propoopplus.softsquirrel.xyz" leftIcon={<CgWebsite size={14} />}>
        Website
      </Button>
      <Button component="a" href="https://github.com/Squirrelcoding/ProPoopPlus" leftIcon={<AiFillGithub size={14} />} className="ml-2 ">
        Github
      </Button>
    </Card.Section>
  </Card>;
}
