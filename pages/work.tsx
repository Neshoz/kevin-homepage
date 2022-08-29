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
      "Developed an in-house application that was responsible for multiple payment routines stemming from and to the bank which led to the ability to generate automated investigatory actions.",
  },
  {
    id: "public-login",
    thumbnail: require("../public/images/logos/shb-logo.svg"),
    title: "Public login",
    description:
      "Implemented an array of security inputs that interface with the public domain for ease of access and abandonment of legacy login methodologies.",
  },
  {
    id: "ideal-payments",
    thumbnail: require("../public/images/logos/shb-logo.svg"),
    title: "iDeal Payments (NL)",
    description:
      "Developed a public application to support direct payments via iDeal in The Netherlands, and an in-house application to search for and view details for payments via iDeal.",
  },
  {
    id: "conversation-api",
    thumbnail: require("../public/images/logos/sinch-logo2.png"),
    title: "Omni Channel Conversation API",
    description:
      "Engineered an omni channel communication product which made it possible, from one place, to access and configure multiple channels and apis, which led to company growth by 15%.",
  },
  {
    id: "rcs-public-dashboard",
    thumbnail: require("../public/images/logos/sinch-logo2.png"),
    title: "RCS Public Customer Dashboard",
    description:
      "Contributed to the RCS product on the public customer dashboard, for users to configure and communicate using the RCS, which made it possible to deprecate legacy channels such as SMS and MMS.",
  },
  {
    id: "flowcharts",
    thumbnail: require("../public/images/logos/sinch-logo2.png"),
    title: "Node-RED Flowcharts",
    description:
      "Developed a flowchart tool based on node-red to visually program logic of sending messages via bots through various channels, integrated with one of the products on the public dashboard.",
  },
  {
    id: "micro-frontend",
    thumbnail: require("../public/images/logos/mediatool-logo-blue.svg"),
    title: "Micro-frontend Infrastructure",
    description:
      "Designed and developed a micro-frontend infrastructure in favor of the current legacy app which made it possible for each team to own their domain and lead to faster and more robust feature development.",
    scale: "scale-down",
  },
  {
    id: "typescript-roadmap",
    thumbnail: require("../public/images/logos/mediatool-logo-blue.svg"),
    title: "TypeScript Roadmap",
    description:
      "Spearheaded the roadmap for modernizing the frontend infrastructure that allowed new features to be written in TypeScript and phase out JavaScript.",
    scale: "scale-down",
  },
  {
    id: "mediatool",
    thumbnail: require("../public/images/logos/mediatool-logo-blue.svg"),
    title: "Design System",
    description:
      "Lead a team of 4 to replace the current and considered legacy frontend component library which led to a more effective collaboration between the developers and the designers.",
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
