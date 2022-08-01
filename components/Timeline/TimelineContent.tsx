import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Position = 'left' | 'right';

function inversePosition(position: Position) {
  return position === 'left' ? 'right' : 'left';
}

interface Props {
  children: ReactNode;
  position: 'left' | 'right';
}

export const TimelineContent = ({ children, position }: Props) => (
  <Box flex={1} padding="6px 16px" textAlign={inversePosition(position)}>
    {children}
  </Box>
);
