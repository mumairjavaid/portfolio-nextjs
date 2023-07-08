"use client"
import { Card, CardHeader, CardBody, CardFooter, Text, Box, Image, Badge, StarIcon, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Grid, GridItem, useColorMode } from '@chakra-ui/react'



const CardComponent = () => {
  // const { colorMode } = useColorMode()
  //   const isDark= colorMode=='dark'
  return (
    // <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    // <GridItem w='100%'>
    <Card maxW='sm' boxSize='300px 400px'>
      <CardBody>
        <Image boxSize='200px 300px'
          src='brain.jpg'
          alt='CT scan'
          borderRadius='lg'
          m='auto'
        />
        <Stack mt='6' spacing='3' justify='center'>
          <Heading size='md'>Smart Brain Hemorrhage Detection</Heading>
          <Text>
            Trained 3 deep learning models(MobileNetv2, ResNet 56, ResNet 101) to detect from CT scan
            whether a person has brain hemorrhage or not and developed a responsive web app for the ease of
            users.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant='ghost' colorScheme='blue'>
          Read more
        </Button>
      </CardFooter>
    </Card>
    // </GridItem>
    // </Grid>
  )
}

export default CardComponent