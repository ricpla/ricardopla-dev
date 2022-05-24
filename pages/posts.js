import { Container, Heading, SimpleGrid, Divider, Box, Button, Text } from "@chakra-ui/react";
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from "../components/grid-item";

import thumbnailFish from "../public/images/174.png"

const Posts = () => (
    <Layout title="Posts">
        <Container>
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


            {/* <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6} >
                    <GridItem title="My fish workflow" thumbnail={thumbnailFish} href="" />
                    <GridItem title="My fish workflow" thumbnail={thumbnailFish} href="" />
                </SimpleGrid>
            </Section>
            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6} >
                    <GridItem title="My fish workflow" thumbnail={thumbnailFish} href="" />
                    <GridItem title="My fish workflow" thumbnail={thumbnailFish} href="" />
                </SimpleGrid>
            </Section>
            <Section delay={0.5}>
                <SimpleGrid columns={[1, 2, 2]} gap={6} >
                    <GridItem title="My fish workflow" thumbnail={thumbnailFish} href="" />
                    <GridItem title="My fish workflow" thumbnail={thumbnailFish} href="" />
                </SimpleGrid>
            </Section> */}
        </Container>
    </Layout>
)

export default Posts
