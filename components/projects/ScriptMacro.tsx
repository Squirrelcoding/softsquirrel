import { Card, Button, Text } from "@mantine/core";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

/** Component for showing this project. Used in pages/projects.tsx */
export default function ScriptMacro({ }) {
  return <Card shadow="sm" padding="xl" >
    <Card.Section>
      <h1 className="ml-5">ScriptMacro</h1>
    </Card.Section>
    <Text weight={500} className="text-sm">
      This is our latest project that is not this website. ScriptMacro is a CLI tool for Linux that makes running entire scripts throughout your OS a breeze! Just add the name and path to the list and you&apos;re done!
    </Text>
    <Card.Section className="mb-1 mt-1" style={{
      marginLeft: "-7px"
    }}>
      <Button component="a" href="https://github.com/Squirrelcoding/ScriptMacro" leftIcon={<AiFillGithub size={14} />} className="ml-2 ">
        Github
      </Button>
    </Card.Section>
  </Card>;
}
