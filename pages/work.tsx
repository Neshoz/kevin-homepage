import type { NextPage } from 'next';
import { FaUniversity, FaBaby, FaCode } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import { LifeEvent } from '../components/LifeEvent';
import { Timeline, TimelineItem } from '../components/Timeline';

const events = [
  {
    dot: <FaBaby size={22} />,
    title: 'Hello, world!',
  },
  {
    dot: <FaUniversity size={22} />,
    title: 'First line of code',
  },
  {
    dot: <FaCode size={20} />,
    title: 'Handelsbanken',
    subtitle: 'Frontend Developer',
    events: [
      'Public login',
      'iDeal Direct Payments - NL',
      'Internal tool - Transaction monitoring'
    ]
  },
  {
    dot: <FaCode size={20} />,
    title: 'Sinch',
  },
  {
    dot: <FaCode size={20} />,
    title: 'Mediatool',
  },
  {
    dot: <FaCode size={20} />,
    title: 'Sandvik'
  }
];

const Work: NextPage = () => {
  return (
    <Box
      display="flex"
      w="100%"
      alignItems="center"
      justifyContent="center"
      css={{ height: 'calc(100% - 60px)' }}
    >
      <Timeline>
        {events.map((event, index, self) => (
          <TimelineItem
            key={index}
            index={index}
            dot={event.dot}
            line={index !== self.length - 1}
            content={
              <LifeEvent
                title={event.title}
                subtitle={event.subtitle}
                events={event.events}
              />
            }
          />
        ))}
      </Timeline>
    </Box>
  );
}

export default Work;

