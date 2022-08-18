import NextImage from "next/image";
import { Box, Image } from "@chakra-ui/react";
import Me from "../../public/me2.jpg";

interface Props {
  small?: boolean;
}

export const ProfilePicture = ({ small }: Props) => {
  if (small) {
    return (
      <Box width={350} height={350}>
        <Image
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="top left"
          alt="me"
          src={Me.src}
          rounded="full"
        />
      </Box>
    );
  }

  return (
    <Box width="100%" mr={[0, 10]} py={2}>
      <NextImage src={Me} alt="me" layout="intrinsic" quality={100} />
    </Box>
  );
};
