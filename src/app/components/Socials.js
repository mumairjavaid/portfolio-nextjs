'use client'
import { HStack } from "@chakra-ui/react";
import {TwitterLogo,FacebookLogo,LinkedinLogo,GithubLogo,Sun} from "@phosphor-icons/react";
import { useColorMode } from '@chakra-ui/react'


const Socials = () => {
    const { colorMode } = useColorMode()
    const isDark= colorMode=='dark'
  return (
    <HStack spacing='70px' mt='60px !important'> 
        <FacebookLogo size={40} color={isDark?"#f5faf6":"#757575"} weight={isDark?"bold":"light"} />
        <TwitterLogo size={40} color={isDark?"#f5faf6":"#757575"} weight={isDark?"bold":"light"} />
        <LinkedinLogo size={40} color={isDark?"#f5faf6":"#757575"} weight={isDark?"bold":"light"} />
        <GithubLogo size={40} color={isDark?"#f5faf6":"#757575"} weight={isDark?"bold":"light"} />
    </HStack>
  )
}

export default Socials