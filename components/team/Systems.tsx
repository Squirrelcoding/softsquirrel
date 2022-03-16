import { Text, Card, Group, Badge, Button } from "@mantine/core";
import React from "react";

/** Component for showing this team member in pages/team */
export default function Systems({ }) {
  return <Card shadow="sm" padding="lg">
    <Group position="apart" style={{
      marginBottom: 5
    }}>
      <Text weight={500}>Squirrelcoding</Text>
      <Badge color="blue" variant="light">
        Systems programming
      </Badge>
    </Group>

    <Text size="sm" style={{
      lineHeight: 1.5
    }}>
      Some of our latest products were made entirely by our systems programmer, Squirrelcoding.
    </Text>

    <Button component="a" href="https://github.com/Squirrelcoding" variant="light" color="blue" fullWidth style={{
      marginTop: 14
    }}>
      Visit Github
    </Button>
  </Card>;
}
