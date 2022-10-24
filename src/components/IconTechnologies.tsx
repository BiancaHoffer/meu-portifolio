import { Flex, Icon, Tooltip  } from "@chakra-ui/react";

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
            marginRight="8px"
            alignItems="center"
            justifyContent="center"
        >
            <Icon 
                as={icon} 
                w="30px" 
                h="30px" 
                color="pink.500"
            />
        </Flex>
    </Tooltip>
  );
}