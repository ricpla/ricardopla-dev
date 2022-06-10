import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="marino turismos">
            <Container>
                <WorkImage src="/images/works/ricdev-2.png" alt="marino-cover" />
                <Title>
                    Ricardo Pla Portfolio <Badge>2022</Badge>
                </Title>
                <P>
                    Design, creation and implementation of my personal web
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://ricardopla.dev/">
                            https://ricardopla.dev/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Nextjs, ChakraUI</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Hosting</Meta>
                        <span>Vercel</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work
