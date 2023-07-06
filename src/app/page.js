'use client'
import Navbar from '@/app/components/Navbar'
import Profile from '@/app/components/Profile'
import { VStack} from '@chakra-ui/react'

const page = () => {
  return (

    <>
    <VStack>
    <Navbar/>
    <Profile/>
    </VStack>
    
    </>
  )
}

export default page