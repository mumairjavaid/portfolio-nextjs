'use client'
import {Moon,FacebookLogo,LinkedinLogo,GithubLogo,Sun} from "@phosphor-icons/react";
import { HStack,Heading,IconButton,Flex,Spacer,useColorMode} from '@chakra-ui/react'


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark= colorMode=='dark'
    return ( 
    <>
    <HStack p='20px' w='100%' m='auto'>
        
        <Heading ml='10px' fontWeight='semibold' size='md' color='cyan.400'>Umair</Heading>
        <Spacer/>
        <Flex>
        <IconButton mr='10px' icon={<LinkedinLogo/>} isRound='true' />
        <IconButton mr='10px' icon={<FacebookLogo/>} isRound='true' />
        <IconButton mr='20px' icon={<GithubLogo/>} isRound='true' />
        <IconButton mr='20px' icon={isDark ? <Sun/> : <Moon/>} isRound='true' onClick={toggleColorMode} />
        </Flex>
    </HStack>
    
    </>
  )
}

export default Navbar