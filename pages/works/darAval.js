import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="marino turismos">
            <Container>
                <WorkImage src="/images/works/funda-1.png" alt="marino-cover" />
                <Title>
                    Mariño Turismo <Badge>2022</Badge>
                </Title>
                <P>
                    Design and creation of the website for the Santiago Mariño
                    Foundation.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://mini.ricardopla.dev/fundacion/">
                            https://mini.ricardopla.dev/fundacion/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJs, HTML5, CSS3, Javascript, Jquery</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Hosting</Meta>
                        <span>Heroku</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/funda-2.png" alt="marino-work" />
            </Container>
        </Layout>
    )
}

export default Work
