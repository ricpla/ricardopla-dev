import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from "@chakra-ui/react"
import Footer from '../footer'
import CoverImage from '../coverImage'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Ricardo Pla homepage" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Ricardo Pla - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {/* {true &&
                    <CoverImage />} For implementing later */} 
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main;