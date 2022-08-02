import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type LeftRight = "left" | "right";
export type SplitOrder = [LeftRight, LeftRight];

interface SplitProps {
  left: ReactNode;
  right: ReactNode;
  order?: SplitOrder;
}

export const Split = ({
  left,
  right,
  order = ["left", "right"],
}: SplitProps) => {
  const [leftOrder] = order;
  const leftFirst = leftOrder === "left";

  return (
    <Flex width="100%" flexDir={{ base: "column", lg: "row" }} py={[0, 4]}>
      <Flex flex={1} justify="center" order={leftFirst ? 1 : 2}>
        {left}
      </Flex>
      <Flex flex={1} justify="flex-start" order={leftFirst ? 2 : 1}>
        {right}
      </Flex>
    </Flex>
  );
};
