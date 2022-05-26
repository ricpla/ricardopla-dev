import NextLink from 'next/link'
import { Button, Container, Box, Heading, useColorModeValue, Link, SimpleGrid, List, ListItem, Icon, chakra } from "@chakra-ui/react"
import Layout from '../components/layouts/article';
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import styled from '@emotion/styled';
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'
import Image from 'next/image'

import thumbnail from '../public/images/174.png'
import CoverImage from '../components/coverImage';

const Typing = styled.span`

    width: 15ch;
    animation: blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 16px solid;

@keyframes blink {
    50% {
        border-color: transparent
    }
}

`

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <CoverImage />
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in venezuela!
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        <Typing>☕ Ricardo Pla</Typing>
                    </Heading>
                    <p>Digital Creator ( Designer / Developer ) </p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center" >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/profile.jpg"
                            alt="Profile image"
                            borderRadius="full"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>
            <Section delay={0.1} >
                <Heading as="h3" variant="section-title">
                    work
                </Heading>
                <Paragraph> lorem impsum, text, that i have to write, who i'am to disagree, somebody want to be use us{' '}
                    <NextLink href="/works/rick" passHref scroll={false}>
                        <Link>
                            Ricardo Pla
                        </Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" >
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1998</BioYear>
                    Born in ven
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Start to work as Developer
                </BioSection>
                <BioSection>
                    <BioYear>2022 to present</BioYear>
                    Works as a freelance
                </BioSection>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    I ❤️
                </Heading>
                <Paragraph>
                    Art, Music,{' '}
                    <Link href="">Drawing</Link>
                    , Playing Drums,{' '}
                    <Link href="">Photography</Link>
                    , Leica, Machine Learning
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Links
                </Heading>
                <List>
                    <ListItem>
                        <Link href="" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                @ricpla
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                in/ricardo-pla
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                @ercuchillero
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href=""
                        title="title"
                        thumbnail={thumbnail}
                    >
                        lorem ipsum
                    </GridItem>
                    <GridItem
                        href=""
                        title="title"
                        thumbnail={thumbnail}
                    >
                        lorem ipsum
                    </GridItem>
                </SimpleGrid>

                <Box align="center" my={4}>
                    <NextLink href="/posts" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Posts
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    </Layout >
)

export default Home
