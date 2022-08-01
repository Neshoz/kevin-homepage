import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { TimelineContent } from './TimelineContent';
import { TimelineDot } from './TimelineDot';
import { TimelineLine } from './TimelineLine';

interface Props {
  line?: boolean;
  dot: ReactNode;
  content: ReactNode;
  index: number;
}

export const TimelineItem = ({ dot, line, content, index }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <Box
      display="flex"
      width="100%"
      minHeight="80px"
    >
      <Box flex={1}>
        {!isEven && <TimelineContent position="left">{content}</TimelineContent>}
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <TimelineDot>{dot}</TimelineDot>
        {line && <TimelineLine />}
      </Box>
      <Box flex={1}>
        {isEven && <TimelineContent position="right">{content}</TimelineContent>}
      </Box>
    </Box>
  );
}
