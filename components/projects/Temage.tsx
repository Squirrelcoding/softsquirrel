import { Card, Button, Text } from "@mantine/core";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

/** Component for showing this project. Used in pages/projects.tsx */
export default function Temage({ }) {
  return <Card shadow="sm" padding="xl" >
    <Card.Section>
      <h1 className="ml-5">Temage</h1>
    </Card.Section>
    <Text weight={500} size="md">
      Create and draw pixel art on your terminal! This is a project written in rust and javascript that allows you to create pixel art on the browser and see it on the terminal.
    </Text>
    <Card.Section className="mb-1 mt-1" style={{
      marginLeft: "1px"
    }}>
      <Button component="a" href="https://github.com/Squirrelcoding/Temage" leftIcon={<AiFillGithub size={14} />} className="ml-2 ">
        Github
      </Button>
    </Card.Section>
  </Card>;
}
