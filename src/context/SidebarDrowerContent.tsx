import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrowerContextProps {
    children: ReactNode;
}

type idebarDrowerContextData = UseDisclosureReturn

const SidebarDrowerContext = createContext({} as idebarDrowerContextData);

export function SidebarDrowerProvider({ children }: SidebarDrowerContextProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
    <SidebarDrowerContext.Provider value={disclosure}>
        {children}
    </SidebarDrowerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrowerContext)