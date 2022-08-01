import { ReactNode } from 'react';
import type { Router } from 'next/router'
import { Navbar } from '../Navbar/Navbar';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export const Layout = ({
  children,
}: Props) => {
  return (
    <Box
      minH="100%"
      w="100%"
      display="flex"
    >
      <Navbar />
      <Box paddingTop="60px" w="100%">
        {children}
      </Box>
      <footer></footer>
    </Box>
  );
}
