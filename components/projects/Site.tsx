import { Card, Text } from "@mantine/core";
import React from "react";

/** Component for showing this project. Used in pages/projects.tsx */
export default function ScriptMacro({ }) {
  return <Card shadow="sm" padding="xl" >
    <Card.Section>
      <h1 className="ml-5">this website</h1>
    </Card.Section>
    <Text weight={500} className="text-sm">
      its a nice site
    </Text>
    <Card.Section className="mb-1 mt-1" style={{
      marginLeft: "-7px"
    }}>
    </Card.Section>
  </Card>;
}
