import { Card, Button, Text,Title, Badge, Group } from "@mantine/core";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

/** Component for showing this project. Used in pages/projects.tsx */
export default function CHIP8() {
    return <Card shadow="sm" padding="xl" >
    <Group position="apart" style={{
      marginBottom: 5
    }}>
      <Title order={2}>CHIP-8 interpreter</Title>
      <Badge color="blue" variant="light">
        new
      </Badge>
    </Group>

        <Text weight={500} size="md">
            Softsquirrel&apos;s approach to developing a CHIP-8 interpreter, and surprisingly, it works!

        </Text>

        <Card.Section className="mb-1 mt-1" style={{
            marginLeft: "1px"
        }}>
            <Button component="a" href="https://github.com/Squirrelcoding/sschip8" leftIcon={<AiFillGithub size={14} />} className="ml-2 ">
                Github
            </Button>
        </Card.Section>
    </Card>;
}
