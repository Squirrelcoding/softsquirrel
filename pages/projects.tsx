import dynamic from 'next/dynamic';
import {SimpleGrid} from "@mantine/core";


/** lazy load all of the components */
const PPP = dynamic(() => import('@components/projects/PPP'))
const BlockRacers = dynamic(() => import('@components/projects/BlockRacers'))
const AntiRickRoll = dynamic(() => import('@components/projects/AntiRickRoll'))
const OPSalmon = dynamic(() => import('@components/projects/OPSalmon'))
const ScriptMacro = dynamic(() => import('@components/projects/ScriptMacro'))
const Site = dynamic(() => import('@components/projects/Site'))

/** Project showcase page */
const projects = () => {
  return (
    <div>
      <h1 className="text-5xl">
        Softsquirrel projects
      </h1>
      <h3>
        These are our favorite projects, for other projects visit the <a href="https://github.com/Squirrelcoding?tab=repositories" style={{
          color: "#428af5"
        }}>github</a>
      </h3>
      <br />

      {/**
       * Each project card is wrapped in the SimpleGrid component so they can be arranged in a grid
       */}
      <SimpleGrid cols={3}>
          <PPP/>

          <ScriptMacro />

          <OPSalmon />

          <AntiRickRoll />

          <BlockRacers />

          <Site />

      </SimpleGrid>
    </div>
  );
}

export default projects;