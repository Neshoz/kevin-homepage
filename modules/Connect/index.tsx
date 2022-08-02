import NextLink from "next/link";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord,
  IoMail,
  IoRocket,
} from "react-icons/io5";
import { Flex, Link, Button } from "@chakra-ui/react";
import { LottieAnimation, SocialLink } from "../../components";
import { useIsSmall } from "../../hooks";
import EarthAnimation from "../../animations/earth.json";

const ICON_SIZE = 18;

export const Connect = () => {
  const isSmall = useIsSmall();
  return (
    <Flex w="100%" align="center" direction="column">
      <LottieAnimation size={isSmall ? 250 : 350} animation={EarthAnimation} />
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
              rightIcon={<IoRocket size={ICON_SIZE} style={{ marginTop: 2 }} />}
            >
              Explore my work
            </Button>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};
