import { ThoseThreeBoxes } from '@components/homepage/ThoseThreeBoxes';
import MainText from '@components/homepage/MainText';
import dynamic from 'next/dynamic';

const Points = dynamic(() => import('@components/homepage/Points'))
/**
 * This is the entry point of the website, with components each representing a part of the main page
 */
export default function App() {

  return (
    <main>
      {
        /** Main text, the Developing X part */
      }
      <MainText />

      {/** More like a showcase of projects */}
      <Points />
      <br />

      {/** Selling points found right above the copyright */}
      <ThoseThreeBoxes />
      <br />
      <br />
      <br />
      <h3>Softsquirrel Studios © 2022</h3>
    </main>
  );
}