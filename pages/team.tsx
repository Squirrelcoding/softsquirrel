import dynamic from 'next/dynamic';
import {SimpleGrid} from '@mantine/core';

// lazy load all of the components
const Joe = dynamic(() => import ('@components/team/Joe'))
const Systems = dynamic(() => import ('@components/team/Systems'))
const Backend = dynamic(() => import ('@components/team/Backend'))
const Frontend = dynamic(() => import ('@components/team/Frontend'))
const Founder = dynamic(() => import ('@components/team/Founder'))
const Mathmetician = dynamic(() => import ('@components/team/Mathmetician'))

/**
 * Page for team member showcase
 */
const team = () => {
    return (
        <div>
            <p className="text-5xl font-medium">
                The team
            </p>
            <p>This is the team responsible for delivering quality software</p>
            {/*Each team card is wrapped in the SimpleGrid component so they can be arranged in a grid*/}
            <SimpleGrid cols={3}>
                <Founder/>
                <Frontend/>
                <Backend/>
                <Systems/>
                <Joe/>
                <Mathmetician/>
            </SimpleGrid>
        </div>
    );
}

export default team;
