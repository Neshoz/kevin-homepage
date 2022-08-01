import NextLink, { LinkProps } from 'next/link';
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { Link, Button } from '@chakra-ui/react';

export interface LinkItemProps extends LinkProps {
  children: ReactNode;
  leftIcon?: ReactElement<any>;
}

export const LinkItem = ({ children, href, leftIcon }: LinkItemProps) => {
  const router = useRouter();
  const active = router.route === href;

  return (
    <NextLink href={href}>
      <Link
        mr={4}
        fontWeight={500}
        fontSize={16}
        borderRadius={4}
        color={active ? 'teal.200' : 'whiteAlpha.900'}
        background={active ? 'rgba(56,161,105,0.1)' : 'transparent'}
        _hover={{
          textDecor: 'none',
          color: 'teal.200'
        }}
      >
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={leftIcon}
          color={active ? 'teal.200' : 'whiteAlpha.900'}
        >
          {children}
        </Button>
      </Link>
    </NextLink>
  );
}