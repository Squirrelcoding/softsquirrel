import { Card, Button, Text } from "@mantine/core";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
/** Component for showing this project. Used in pages/projects.tsx */

export default function OPSalmon({ }) {
  return <Card shadow="sm" padding="xl" >
    <Card.Section>
      <h1 className="ml-5">OP Salmon</h1>
    </Card.Section>
    <Text weight={500} className="text-sm">
      Salmon in Minecraft are boring, all they do is just swim around and die. To fix this, Softsquirrel Studios worked really really really really hard to make this very very cool plugin that make&apos;salmon more interesting
    </Text>
    <Card.Section className="mb-1 mt-1" style={{
      marginLeft: "-7px"
    }}>
      <Button component="a" href="https://github.com/Squirrelcoding/OP-salmon" leftIcon={<AiFillGithub size={14} />} className="ml-2 ">
        Github
      </Button>
    </Card.Section>
  </Card>;
}
