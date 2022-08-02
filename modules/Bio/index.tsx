import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { ReactifluxIcon } from "../../components/Icon";

const textStyles = {
  fontSize: 18,
  lineHeight: 1.6,
};

const reactiflux = "https://discord.com/invite/0ZcbPKXt5bZ6au5t";

export const Bio = () => (
  <Box>
    <Heading as="h2" size="lg" mb={4}>
      About Kevin
    </Heading>
    <Text {...textStyles}>
      Kevin Nemec is a software engineer, with over 10 years of experience
      writing code - 6 of them working professionally in the industry. During
      this time, Kevin has architected large and complex webapps and mentored
      junior developers. His traits of curiosity, attention to detail and
      putting high demands on himself and his work, inform his mindful but
      competitive approach.
    </Text>
    <br />
    <Text {...textStyles}>
      Kevin is fueled by his passion for delivering excellent experiences on the
      web. He considers himself a T-shaped person, having a broad base of
      knowledge, with expertise in the web platform. He is keeping up to-date
      with new best practices and new technologies, by mentoring junior
      developers and building proof of concepts.
    </Text>
    <br />
    <Text {...textStyles} mb={10}>
      Kevin&apos;s hunger for knowledge and attention to detail allowed him to
      take on responsibility on his first professional project at Handelsbanken.
      There, he was trusted to engineer an internal tool for viewing
      transactions details for certain payments. He was later assigned to lead
      the frontend development of a new internal tool, which would allow
      personnel to study and trace transactions, and take necessary actions on
      fraudulent payments.
      <br />
      <br />
      Kevin believes that self discipline, humbleness and constant learning, is
      essential to grow as an engineer. He is practicing his preach through
      participating in competitive e-sports, fitness, and providing help to
      developers in{" "}
      <Link href={reactiflux}>
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<ReactifluxIcon size={18} />}
        >
          Reactiflux
        </Button>
      </Link>{" "}
      discord server.
    </Text>
  </Box>
);
