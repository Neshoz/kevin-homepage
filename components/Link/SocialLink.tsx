import { Button, ButtonProps, Link } from "@chakra-ui/react";

interface SocialLinkProps extends ButtonProps {
  href?: string;
}

export const SocialLink = ({ href, leftIcon, children, ...props }: SocialLinkProps) => {
  return (
    <Link href={href} target="_blank" width="min-content">
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={leftIcon}
        lineHeight={0}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}
