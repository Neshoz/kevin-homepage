import { Box, Heading, List, ListItem } from '@chakra-ui/react';

interface LifeEventProps {
  title: string;
  subtitle?: string;
  events?: string[];
}

export const LifeEvent = ({
  title,
  subtitle,
  events = []
}: LifeEventProps) => {
  return (
    <Box mt={1.5}>
      <Heading
        as="h2"
        fontWeight={500}
        fontSize={28}
      >
        {title}
      </Heading>
      {subtitle && (
        <Heading
          as="h3"
          fontWeight={300}
          fontSize={28}
        >
          {subtitle}
        </Heading>
      )}
      <List>
        {events.map((event) => (
          <ListItem key={event}>{event}</ListItem>
        ))}
      </List>
    </Box>
  );
}
