import NextImage from "next/image";
import { Box, Avatar, Image } from "@chakra-ui/react";
import Me from "../../public/me2.jpg";

interface Props {
  avatar?: boolean;
}

export const ProfilePicture = ({ avatar }: Props) => {
  if (avatar) {
    return (
      <Box width={200} height={200}>
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
