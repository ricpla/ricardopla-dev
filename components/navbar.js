import Logo from './logo'
import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Stack
} from "@chakra-ui/react"
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#17192650')}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between" >
                <Flex align="center" mr={5} >
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        Contact me
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    {/* <Link href="https://mini.ricardopla.dev/" p={2}>
                        <ExternalLinkIcon mx="2px" />Mini
                    </Link> */}
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label='Options' />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>

                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>

                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>

                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>Contact me</MenuItem>
                                </NextLink>

                                <NextLink href="https://github.com/ricpla/ricardopla-dev" passHref>
                                    <MenuItem as={Link} href="https://github.com/ricpla/ricardopla-dev">View Source</MenuItem>
                                </NextLink>
                            </MenuList>

                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar