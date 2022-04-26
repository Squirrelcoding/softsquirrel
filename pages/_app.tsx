/** Import dependencies */
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { AppShell, MantineProvider } from '@mantine/core';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
import Sidebar from '@components/app/Sidebar';
import React from 'react';

/** App function */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      {/** [above] User provider for auth0 */}
      {/** [below] Mantine component library provider */}
      <MantineProvider
        theme={{
          colorScheme: 'dark',
          colors: {
            dark: [
              '#d5d7e0',
              '#acaebf',
              '#8c8fa3',
              '#666980',
              '#4d4f66',
              '#34354a',
              '#2b2c3d',
              '#1d1e30',
              '#0c0d21',
              '#01010a',
            ],
          },
        }}
        withGlobalStyles
      >
        {/** Parallax provider for react-scroll-parallax */}
        <ParallaxProvider>

          {/** App shell component from Mantine */}
          <AppShell
            fixed navbar={<Sidebar fixed width={{ base: 200 }} padding="xs" className="select-none"/>}
          >

            {/** Head thing */}
            <Head>
              <link rel="shortcut icon" href="/icon.ico" />
              <title>Softsquirrel</title>
              <meta name="keywords" content="Softsquirrel, Pro Poop, Cool" />
              <meta name="description" content="A very cool company" />
              <meta name="author" content="Squirrelcoding" />
            </Head>

            {/** Main component */}
              <Component {...pageProps} className="ml-1 select-none"/>
          </AppShell>
        </ParallaxProvider>
      </MantineProvider>
    </UserProvider>
  )
}

export default MyApp