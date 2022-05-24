import Head from 'next/head'
import Navbar from '../navbar.js'
import CoverImage from '../coverImage.js'
import { Box, Container } from "@chakra-ui/react"
import Footer from '../footer'

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
                <CoverImage />
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main;