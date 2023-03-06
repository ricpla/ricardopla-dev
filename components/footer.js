import { Box, Link } from "@chakra-ui/react";
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            <Box>
                <Link href="https://github.com/ricpla/ricardopla-dev"><IoLogoGithub /> View Source Code</Link>
            </Box>
            <Box>
                &copy; {new Date().getFullYear()} Ricardo Pla. All Rights Reserved.
            </Box>
        </Box>
    )
}

export default Footer