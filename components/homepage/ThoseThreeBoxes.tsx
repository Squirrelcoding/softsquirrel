import React from "react";
import { Text, Card, Grid } from '@mantine/core';

/** Even MORE selling points */
export function ThoseThreeBoxes() {
  return (
    /** A grid to show the three boxes*/
    <Grid grow>

      {/** Selling point #1, wrapped in a card in a grid column */}
      <Grid.Col span={4}>  
        <Card shadow="sm" padding="xl">
          <Card.Section>
            <h1 className="ml-5">Our goal</h1>
          </Card.Section>
          <Text weight={500} size="md">
            Here at Softsquirrel Studios, we believe our mission is to deliver the best and most useful software out into the public. Not only that, but a lot of our projects are open-source! We are working towards this goal every day by working hard.
          </Text>
        </Card>
      </Grid.Col>

      {/** Selling point #2*/}

      <Grid.Col span={4}>
        <Card shadow="sm" padding="xl">
          <Card.Section>
            <h1 className="ml-5">We are cool 😎</h1>
          </Card.Section>
          <Text weight={500} size="md">
            In case you didn&apos;t notice, we are the coolest company out there. We are also very very very rich and expensive and tech-y and cool and proffesional with the best english skills and are a fortune 500 company.
          </Text>
        </Card>
      </Grid.Col>

      {/** Selling point #3*/}

      <Grid.Col span={4}>
        <Card shadow="sm" padding="xl">
          <Card.Section>
            <h1 className="ml-5">2022 objectives</h1>
          </Card.Section>
          <Text weight={500} size="md">
            With some <i>stuff</i> going on in the world, we can still reach our goals for 2022. What are those goals, you ask? We don&apos;t know. Just go with the flow. We actually dont know because this text box is just a filler one to not make the website look so empty.
          </Text>
        </Card>
      </Grid.Col>

    </Grid>
  )
}
