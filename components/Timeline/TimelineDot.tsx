import { CSSObject, Tag } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

/*
const frostedGlass: CSSObject = {
  content: "''",
  position: 'absolute',
  background: 'inherit',
  zIndex: -1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
  filter: 'blur(10px)',
  borderRadius: 'full'
};
*/

export const TimelineDot = ({ children }: Props) => (
  <Tag
    p={2}
    borderRadius="full"
    size="lg"
    alignSelf="baseline"
    margin="11.5px 0"
    display="flex"
    shadow="teal"
    colorScheme="teal"
  >
    {children}
  </Tag>
);
