import dynamic from 'next/dynamic';
const Points = dynamic(() => import('@components/homepage/Points'))
const ThoseThreeBoxes = dynamic(() => import('@components/homepage/ThoseThreeBoxes'))
const MainText = dynamic(() => import('@components/homepage/MainText'))
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
      <br />
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