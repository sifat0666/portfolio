import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Router } from 'next/router'
import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
// import Navbar from '../Navbar'

const Main = ({children, router}: {
    children: ReactNode
    router: any
}) => {
  return (
    <div>
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Sifat Bhuiyan - Homepage</title>
           </Head>
           <Navbar path={router.asPath}/>
           {/* <div>navbark</div> */}
           <Container maxW='container.md' pt={14}>
            {children}
           </Container>
        </Box>
    </div>
  )
}

export default Main