import { Card, Group, Badge, Button, Text } from "@mantine/core";
import React from "react";

/** joe */
export default function Joe({ }) {
  return <Card shadow="sm" padding="lg">
    <Group position="apart" style={{
      marginBottom: 5
    }}>
      <Text weight={500}>Joe</Text>
      <Badge color="blue" variant="light">
        Chipmunk
      </Badge>
    </Group>

    <Text size="sm" style={{
      lineHeight: 1.5
    }}>
      Joe is our data scientist and is an ordinary chipmunk. He didn&apos;t any commit human rights violations and war crimes from 1933 to 1991 during a time where he wasn&apos;t a double-agent high-profile forgein miltary officer for several countries that have now collapsed. He didn&apos;t use multiple disguises to not be a military officer for those countries. He isn&apos;t trying to escape several international organizations to pay for what he has done. Joe isn&apos;t banned from 26 countries for not smuggling illegal items to them. He is not a part of the Italian Mafia and didn&apos;t serve 3 months of prison before making an escape. Fun fact: he speaks German and Russian!
    </Text>

    <Button component="a" href="https://www.gannett-cdn.com/-mm-/d9b3609328d43928121dd9875d84f6be744cc350/c=0-49-1259-757/local/-/media/2020/11/05/WickedLocal/ghows-WL-201109771-532ce4b5.jpg?width=1259&height=629&fit=crop&format=pjpg&auto=webp" variant="light" color="blue" fullWidth style={{
      marginTop: 14
    }}>
      Picture of Joe
    </Button>
  </Card>;
}
