import { ChakraProps, Heading as HeadingChakra } from "@chakra-ui/react";

interface HeadingProps extends ChakraProps {
    title: string;

}

export function Heading({ title, ...spreed }: HeadingProps) {
  return (
    <HeadingChakra
        fontSize={["1.5rem", "2.5rem", "3.5rem", "4.5rem"]}
        {...spreed}
    >
        { title }
    </HeadingChakra>
  );
}