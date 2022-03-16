import { Card, Group, Badge, Button, Text } from "@mantine/core";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

/** Component for showing this project. Used in pages/projects.tsx */
export default function AntiRickRoll() {
  return <Card shadow="sm" padding="xl" >
    <Group position="apart" style={{
      marginBottom: 5
    }}>
      <Text weight={500} className="text-lg">Anti rick roll extension</Text>
      <Badge color="blue" variant="light">
        UNMAINTAINED
      </Badge>
    </Group>
    <Text weight={500} className="text-sm">
      An unofficial chrome extension that prevents rick rolls, you can add and edit links that lead to rick rolls as well.
    </Text>
    <Card.Section className="mb-1 mt-1" style={{
      marginLeft: "-7px"
    }}>
      <Button component="a" href="https://github.com/Squirrelcoding/Anti-Rick-Roll-Chrome-Extension" leftIcon={<AiFillGithub size={14} />} className="ml-2 ">
        Github
      </Button>
    </Card.Section>
  </Card>;
}
