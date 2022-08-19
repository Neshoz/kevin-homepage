import type { NextPage } from "next";
import type { WorkItem } from "../components/WorkGridItem";
import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Page, WorkGridItem } from "../components";

const items: WorkItem[] = [
  {
    id: "transaction-monitoring",
    thumbnail: require("../public/images/logos/shb-logo.svg"),
    title: "Transaction Monitoring",
    description:
      "Internal tool allowing personnel to monitor payments and take action on fraduluent ones",
  },
  {
    id: "ideal-payments",
    thumbnail: require("../public/images/logos/shb-logo.svg"),
    title: "iDeal Payments (NL)",
    description: "Direct payments via iDeal in The Netherlands",
  },
  {
    id: "public-dashboard",
    thumbnail: require("../public/images/logos/sinch-logo2.png"),
    title: "Public Dashboard",
    description:
      "Various products for integrating with different communucation providers",
  },
  {
    id: "mediatool",
    thumbnail: require("../public/images/logos/mediatool-logo-blue.svg"),
    title: "Lead Frontend Engineer",
    description: "Lead TypeScript integration and architectual decisions",
    scale: "scale-down",
  },
];

const Work: NextPage = () => {
  return (
    <Page title="Work">
      <Container h="100%" maxW="container.lg" pt={10}>
        <Flex direction="column" align="center">
          <Heading>My works</Heading>
          <SimpleGrid columns={[1, 2]} spacing={12} py={14}>
            {items.map((item) => (
              <WorkGridItem key={item.id} item={item} />
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Page>
  );
};

export default Work;
