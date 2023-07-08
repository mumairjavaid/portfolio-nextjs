"use client"
import { Flex,Box,HStack,Stack,Text,VStack} from '@chakra-ui/react'
// import { Flex,Box,HStack,Stack,Text,VStack} from '@chakra-ui/next-js'
import CardComponent from '@/app/components/CardComponent'

const Projects = () => {
  return (
    <>
    <Text textAlign='start' fontSize='4xl' color='cyan.400' fontWeight='bold' mb='10px' mt='50px' w='100%' ml='322px'>Projects</Text>
    <Flex align="center" w='100%' justify='center' spacing='50px' >
        <Box mr='50px'>
            <Text fontSize='6xl' color='cyan.400'>1+</Text>
            <Text fontSize='4xl'>Years of Experience</Text>
        </Box>
        
        <HStack spacing='10' wrap='wrap'>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            
        </HStack>
        

    </Flex>
    </>
  )
}

export default Projects