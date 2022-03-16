import { Card, Group, Badge, Button, Text } from "@mantine/core";
import React from "react";

/** Component for showing this team member in pages/team */
export default function Founder({ }) {
  return <Card shadow="sm" padding="lg">
    <Group position="apart" style={{
      marginBottom: 5
    }}>
      <Text weight={500}>Squirrelcoding</Text>
      <Badge color="blue" variant="light">
        Founder
      </Badge>
    </Group>

    <Text size="sm" style={{
      lineHeight: 1.5
    }}>
      The one and only Squirrelcoding! One of the largest companies out there, Softsquirrel Studios, would never be if it weren&apos; for the work of Squirrelcoding
    </Text>

    <Button component="a" href="https://github.com/Squirrelcoding" variant="light" color="blue" fullWidth style={{
      marginTop: 14
    }}>
      Visit Github
    </Button>
  </Card>;
}
