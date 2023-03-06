import { Container, Heading, SimpleGrid, Divider, Box, Button, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from "../components/grid-item";
import CoverImage from "../components/coverImage";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <CoverImage />
            <Heading as="h3" fontSize={20} mb={4}>
                Posts
            </Heading>

            <Text>I haven't published anything yet, but I will soon :{')'}</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref scroll={false}>
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    </Layout>
)

export default Posts
