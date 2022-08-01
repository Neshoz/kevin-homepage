import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord,
  IoMail,
  IoRocket,
} from "react-icons/io5";
import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import { Bio, LottieAnimation, SocialLink, Split } from "../components";
import Me from "../public/me2.jpg";
import { Page } from "../components/Page";
import EarthAnimation from "../animations/earth.json";

const ICON_SIZE = 18;

const Work: NextPage = () => {
  return (
    <Page title="About">
      <Container maxW="container.xl">
        <Split
          left={
            <Box width={["100%"]} mr={[0, 10]} py={2} rounded="full">
              <Image src={Me} alt="me" layout="intrinsic" quality={100} />
            </Box>
          }
          right={
            <Flex w="100%" align="center" mt={0} direction="column">
              <LottieAnimation size={400} animation={EarthAnimation} />
              <Flex direction="column">
                <SocialLink
                  href="https://github.com/Neshoz"
                  leftIcon={<IoLogoGithub size={ICON_SIZE} />}
                >
                  {"@Neshoz"}
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/kevin-nemec-6699ab126/"
                  leftIcon={<IoLogoLinkedin size={ICON_SIZE} />}
                >
                  {"@Kevin Nemec"}
                </SocialLink>
                <SocialLink
                  href="https://discordapp.com/users/206454991303606280/"
                  leftIcon={<IoLogoDiscord size={ICON_SIZE} />}
                >
                  {"@Nesho#3482"}
                </SocialLink>
                <SocialLink
                  href="mailto:kevin.nemec94@gmail.com"
                  leftIcon={<IoMail size={ICON_SIZE} />}
                >
                  {"@kevin.nemec94@gmail.com"}
                </SocialLink>
                <NextLink href="/work">
                  <Link _hover={{ textDecoration: "none" }}>
                    <Button
                      my={6}
                      lineHeight={0}
                      colorScheme="teal"
                      rightIcon={
                        <IoRocket size={ICON_SIZE} style={{ marginTop: 2 }} />
                      }
                    >
                      Explore my work
                    </Button>
                  </Link>
                </NextLink>
              </Flex>
            </Flex>
          }
        />
        <Flex flex={1}>
          <Bio />
        </Flex>
      </Container>
    </Page>
  );
};

export default Work;
