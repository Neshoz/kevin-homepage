import { default as NextHead } from 'next/head';
import { ReactNode } from 'react';

export const Head = ({ children }: { children: ReactNode }) => (
  <>
    <NextHead>
      <title>Kevin Nemec - Homepage</title>
      <meta name="description" content="Kevin Nemec - Homepage" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
    {children}
  </>
)