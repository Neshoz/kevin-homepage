import { IoArrowForward } from "react-icons/io5";
import NextLink from "next/link";
import type { NextPage } from "next";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import WaveAnimation from "../animations/hi.json";
import { LottieAnimation, Split, SplitOrder, Page } from "../components";

const Home: NextPage = () => {
  const order = useBreakpointValue({
    base: ["right", "left"],
    lg: ["left", "right"],
  }) as SplitOrder;

  return (
    <Page title="Home">
      <Container
        maxW="container.lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Split
          order={order}
          left={
            <Flex justify="center" flexDir="column" flex={1}>
              <Heading as="h1" fontSize={55} fontWeight={700} lineHeight={1.25}>
                Kevin Nemec
              </Heading>
              <Heading as="h2" fontSize={25} fontWeight={500} mb={6}>
                Senior Software Engineer & Mentor
              </Heading>
              <Text fontSize={18} whiteSpace="pre-line">
                A meticulous and passionate software engineer who applies strong
                patterns and principles to craft robust and excellent
                experiences on the web.
              </Text>
              <Box>
                <Link as={NextLink} href="/about">
                  <Button
                    mt={6}
                    colorScheme="teal"
                    lineHeight={0}
                    rightIcon={
                      <IoArrowForward size={18} style={{ marginTop: 2 }} />
                    }
                  >
                    Find out more
                  </Button>
                </Link>
              </Box>
            </Flex>
          }
          right={
            <Center flex={1}>
              <LottieAnimation animation={WaveAnimation} />
            </Center>
          }
        />
      </Container>
    </Page>
  );
};

export default Home;
