import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
heigth: 30px;
line-height: 20px;
padding: 10px;

&:hover icon {
    transform: rotate(20deg)
}
`

const Logo = () => {
    return (
        <Link href="/" scroll={false}>
            <a>
                <LogoBox>
                    {/* <Image /> */}
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily="Roboto mono, monospace" fontWeight="bold" ml={3}>
                        ☕ Ricardo Pla
                    </Text>
                </LogoBox>

            </a>
        </Link>
    )
}

export default Logo