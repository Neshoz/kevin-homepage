import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Timeline = ({ children }: Props) => (
  <Box display="flex" flex={1} flexDirection="column">
    {children}
  </Box>
);
