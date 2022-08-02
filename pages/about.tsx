import type { NextPage } from "next";
import { Container, Flex } from "@chakra-ui/react";
import { Split } from "../components";
import { Bio, Connect, ProfilePicture } from "../modules";
import { Page } from "../components/Page";
import { useIsSmall } from "../hooks";

const Work: NextPage = () => {
  const isSmall = useIsSmall();
  return (
    <Page title="About">
      <Container maxW="container.xl">
        <Split left={!isSmall && <ProfilePicture />} right={<Connect />} />
        <Flex flex={1}>
          <Bio />
        </Flex>
      </Container>
    </Page>
  );
};

export default Work;
