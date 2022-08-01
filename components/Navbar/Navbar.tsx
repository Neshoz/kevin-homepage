import { Box } from '@chakra-ui/react';
import { LinkItem, SocialLink } from '../Link';
import { LinkedInIcon } from '../Icon/LinkedIn';
import { GithubMarkIcon } from '../Icon/GithubMark';
import HomeAnimation from '../../animations/home.json';
import { LottieAnimation } from '../LottieAnimation';

const HomeLinkItem = () => {
  return (
    <LinkItem
      href="/"
      leftIcon={
        <LottieAnimation
          size={36}
          animation={HomeAnimation}
          loop={false}
        />
      }
    >
      <Box
        display="flex"
        flex={1}
        alignItems="center"
      >
        Kevin Nemec
      </Box>
    </LinkItem>
  );
};

export const Navbar = () => {
  return (
    <Box
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="nav"
      h="60px"
      w="100%"
      bg="#20202380"
      px={["6px", "200px"]}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Box display="flex" alignItems="center" flex={1}>
        <HomeLinkItem />
        <LinkItem href="/about">
            About
        </LinkItem>
        <LinkItem href="/work">
            Work
        </LinkItem>
      </Box>
    </Box>
  );
}