import { useBreakpoint } from "@chakra-ui/react";

export const useIsSmall = () => {
  const breakpoint = useBreakpoint({ ssr: true });
  return ["base", "sm", "md"].includes(breakpoint);
};
