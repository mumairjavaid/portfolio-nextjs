"use client"
import { ColorModeScript } from '@chakra-ui/react'
import {Providers} from './providers';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       <ColorModeScript initialColorMode='light' />
       <Providers>{children}</Providers>
      </body>
    </html>
  )
}
