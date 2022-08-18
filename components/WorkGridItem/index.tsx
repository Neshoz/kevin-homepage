//import NextImage, { StaticImageData } from "next/image";
import NextImage, { StaticImageData } from "next/future/image";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";

export interface WorkItem {
  id: string;
  thumbnail: StaticImageData;
  title: string;
  description: string;
}

interface Props {
  item: WorkItem;
}

export const WorkGridItem = ({
  item: { id, thumbnail, title, description },
}: Props) => {
  return (
    <NextLink href={`/works/${id}`}>
      <Box
        as={motion.div}
        h={300}
        w={["100%", 350]}
        borderRadius={4}
        bg="blackAlpha.500"
        shadow="lg"
        role="group"
        overflow="hidden"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.15, type: "easeInOut" },
        }}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Box h={150} bg="whiteAlpha.800">
          <NextImage
            src={thumbnail}
            style={{ height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box p={3}>
          <Heading as="h2" fontSize={18} color="whiteAlpha.900" pb={4}>
            {title}
          </Heading>
          <Text color="whiteAlpha.800">{description}</Text>
        </Box>
      </Box>
    </NextLink>
  );
};
