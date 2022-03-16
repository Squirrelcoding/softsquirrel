import { Card, Group, Badge, Button, Text } from "@mantine/core";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
/** Component for showing this project. Used in pages/projects.tsx */

export default function BlockRacers({ }) {
  return <Card shadow="sm" padding="xl" style={{ height: 185 }} >
    <Group position="apart" style={{
      marginBottom: 5
    }}>
      <Text weight={500} className="text-lg">Block Racers</Text>
      <Badge color="blue" variant="light">
        UNMAINTAINED
      </Badge>
    </Group>
    <Text weight={500} className="text-sm">
      A game with blocks. Who race.
    </Text>
    <br />
    <Card.Section className="" style={{
      marginLeft: "-7px"
    }}>
      <Button component="a" href="https://github.com/Squirrelcoding/Block-Racers" leftIcon={<AiFillGithub size={14} />} className="ml-2 ">
        Github
      </Button>
    </Card.Section>
  </Card>;
}
