import { Box, Button, Container, Heading, Link, Text } from "@chakra-ui/react";
import { IoArrowForward } from "react-icons/io5";
import NextLink from "next/link";
import type { NextPage } from "next";
import WaveAnimation from "../animations/hi.json";
import { LottieAnimation } from "../components/LottieAnimation";
import { Page } from "../components/Page";

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <Container
        maxW="container.lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        css={{ height: "calc(100% - 60px)" }}
      >
        <Box flex={1}>
          <Box>
            <Heading as="h1" fontSize={55} fontWeight={700} lineHeight={1.25}>
              Kevin Nemec
            </Heading>
            <Heading as="h2" fontSize={25} fontWeight={500} mb={6}>
              Senior Software Engineer
            </Heading>
            <Text fontSize={18} whiteSpace="pre-line">
              A meticulous and passionate software engineer who applies strong
              patterns and principles to craft robust and excellent experiences
              on the web.
            </Text>
          </Box>

          <Link as={NextLink} href="/about">
            <Button
              mt={6}
              colorScheme="teal"
              lineHeight={0}
              rightIcon={<IoArrowForward size={18} style={{ marginTop: 2 }} />}
            >
              Find out more
            </Button>
          </Link>
        </Box>
        <Box flex={1}>
          <LottieAnimation animation={WaveAnimation} />
        </Box>
      </Container>
    </Page>
  );
};

export default Home;
