import NextImage, { StaticImageData } from "next/future/image";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { IoCode } from "react-icons/io5";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export interface WorkItem {
  id: string;
  thumbnail: StaticImageData;
  scale?: "cover" | "scale-down";
  title: string;
  description: string;
}

interface Props {
  item: WorkItem;
}

export const WorkGridItem = ({
  item: { id, thumbnail, title, description, scale },
}: Props) => {
  return (
    <Flex
      direction="column"
      as={motion.div}
      w={["100%", 350]}
      borderRadius={4}
      bg="blackAlpha.500"
      shadow="lg"
      role="group"
      overflow="hidden"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Box h={150} bg="whiteAlpha.800">
        <NextImage
          src={thumbnail}
          style={{
            height: "100%",
            objectFit: scale ?? "cover",
            width: "100%",
          }}
        />
      </Box>
      <Flex direction="column" flexGrow={1} p={3}>
        <Heading as="h2" fontSize={18} color="whiteAlpha.900" pb={4}>
          {title}
        </Heading>
        <Text color="whiteAlpha.800">{description}</Text>
      </Flex>
      <Flex justify="flex-start" align="flex-end" px={3} py={3}>
        <NextLink href={`/works/${id}`}>
          <Button
            lineHeight={0}
            rightIcon={<IoCode style={{ marginTop: 2 }} />}
            colorScheme="teal"
          >
            View work
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};
