'use client'
import { Stack,Heading,IconButton,Flex,Spacer,useColorMode,Circle,useMediaQuery,Text,Image,Box,Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const Profile = () => {
    const { colorMode } = useColorMode()
    const isDark= colorMode=='dark'
    const [isLargeScreen] = useMediaQuery('(min-width: 600px)')
    const [first, setFirst] = useState(false)
    useEffect(() => {
      if(isLargeScreen!=first){
        setFirst(isLargeScreen)}

    }, [isLargeScreen])
    
     return (
    
    <Stack w="full">
        <Circle position='absolute' mt='-30px' h='250px' w='250px' mr='307' opacity='0.1' alignSelf='flex-end' bg='gray.100'/>
        <Flex direction={first?'row':'column'} p='32px' w='100%' alignItems='center' justifyContent='center' >
            <Box mt="0" mr="40px" ml='0px' w='40%'>
              <Text fontWeight='semibold' fontSize='5xl'>Hello I am</Text>
              <Text fontWeight='bold' fontSize='6xl' bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip='text'>Muhammad Umair Javaid</Text>
              <Text color='gray.400'>Electrical Engineer | React Developer | UET '22 | Machine Learning Enthusiat</Text>
            <Button mt={8} colorScheme="blue"><Link href="https://www.linkedin.com/in/umair-javaid/" target='__blank'>Hire Me</Link></Button>
            </Box>
            <Image src='/photo.png' mt='0'
                    mb='0' borderRadius='full'
                     boxShadow="lg" backgroundColor="transparent"
                    boxSize="250px"/>
        </Flex>
    </Stack>
  )
  }

export default Profile