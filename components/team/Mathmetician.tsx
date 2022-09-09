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
        Mathmetician
      </Badge>
    </Group>

    <Text size="sm" style={{
      lineHeight: 1.5
    }}>
      Every team needs a math guy, he only started Calculus but it&apos;s more than enough for now.
    </Text>

    <Button component="a" href="https://github.com/Squirrelcoding" variant="light" color="blue" fullWidth style={{
      marginTop: 14
    }}>
      Visit Github
    </Button>
  </Card>;
}
