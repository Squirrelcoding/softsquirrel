import { Card, Group, Badge, Button, Text } from "@mantine/core";
import React from "react";

/** Component for showing this team member in pages/team */
export default function Backend({ }) {
  return <Card shadow="sm" padding="lg">
    <Group position="apart" style={{
      marginBottom: 5
    }}>
      <Text weight={500}>Squirrelcoding</Text>
      <Badge color="blue" variant="light">
        Backend engineer
      </Badge>
    </Group>

    <Text size="sm" style={{
      lineHeight: 1.5
    }}>
      Part of web applications is the backend. The backend is probably the most critical part of an application, as it makes the entire thing work! And Squirrelcoding is just the man for the job.
    </Text>

    <Button component="a" href="https://github.com/Squirrelcoding" variant="light" color="blue" fullWidth style={{
      marginTop: 14
    }}>
      Visit Github
    </Button>
  </Card>;
}
