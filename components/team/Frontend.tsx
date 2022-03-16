import { Card, Group, Badge, Button, Text } from "@mantine/core";
import React from "react";

/** Component for showing this team member in pages/team */
export default function Frontend({ }) {
  return <Card shadow="sm" padding="lg">
    <Group position="apart" style={{
      marginBottom: 5
    }}>
      <Text weight={500}>Squirrelcoding</Text>
      <Badge color="blue" variant="light">
        Frontend Dev
      </Badge>
    </Group>

    <Text size="sm" style={{
      lineHeight: 1.5
    }}>
      Squirrelcoding is our talented frontend developer with very nice frontend skills
    </Text>

    <Button component="a" href="https://github.com/Squirrelcoding" variant="light" color="blue" fullWidth style={{
      marginTop: 14
    }}>
      Visit Github
    </Button>
  </Card>;
}
