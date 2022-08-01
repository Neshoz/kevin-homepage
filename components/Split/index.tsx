import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface SplitProps {
  left: ReactNode;
  right: ReactNode;
}

export const Split = ({ left, right }: SplitProps) => (
  <Flex
    width="100%"
    flexDir={['column', 'row']}
    py={[0, 4]}
  >
    <Flex flex={1} justify="center">{left}</Flex>
    <Flex flex={1} justify="flex-start">{right}</Flex>
  </Flex>
);
