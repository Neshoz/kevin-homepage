import NextImage, { StaticImageData } from "next/future/image";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import { scaleTransition } from "../../util";

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
        whileHover={scaleTransition}
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
