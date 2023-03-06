import { Box, Container, Image } from "@chakra-ui/react"

const CoverImage = () => (
    <Box>
        <Container>
            <Box rounded='lg' mb={6} mt={10} align="center" boxShadow='dark-lg' >
                <Image src='/images/174.png' alt='Dan Abramov' />
            </Box>
        </Container>
    </Box>

)

export default CoverImage;