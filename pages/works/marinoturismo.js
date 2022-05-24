import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    Mariño Turismo <Badge>2022</Badge>
                </Title>
                <P>
                    A markdown note-taking app with 100+ plugins.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.ricardopla.dev">
                            https://www.ricardopla.dev <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, HTML5, CSS3, Javascript, Jquery</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">
                            How I've Attract <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/174.png" alt="Inkdrop" />
                <WorkImage src="/images/174.png" alt="Inkdrop" />
            </Container>
        </Layout>
    )
}

export default Work
