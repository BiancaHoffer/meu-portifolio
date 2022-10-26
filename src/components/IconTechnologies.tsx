import { Flex, Icon, Tooltip } from "@chakra-ui/react";

interface IconTechnologiesProps {
    icon: any;
    label: string;
}

export function IconTechnologies({ icon, label }: IconTechnologiesProps) {
  return (
    <Tooltip label={label} bg='gray.800' color='white'>
        <Flex 
            h="44px" 
            w="44px" 
            borderRadius="50%" 
            alignItems="center"
            justifyContent="center"
            data-aos="zoom-in"
        >
            <Icon 
                as={icon} 
                w={["1.5rem", "2.5rem"]}
                h={["1.5rem", "2.5rem"]}
                color="pink.500"
            />
        </Flex>
    </Tooltip>
  );
}