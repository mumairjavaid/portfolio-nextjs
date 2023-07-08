'use client'
import Navbar from '@/app/components/Navbar'
import Profile from '@/app/components/Profile'
import Socials from '@/app/components/Socials'
import Projects from '@/app/components/Projects'
import {CardComponent} from '@/app/components/CardComponent'
import { Box, VStack, Card, ChakraProvider} from '@chakra-ui/react'

const page = () => {
  return (

    <ChakraProvider>
    <VStack>
      <Navbar/> 
      <Profile/>
      <Socials/>
      <Projects/>
      {/* <CardComponent/>  */}
    </VStack>   
    </ChakraProvider>
  )
}

export default page