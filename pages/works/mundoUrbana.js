import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Mundo Urbana">
            <Container>
                <WorkImage src="/images/works/marino-1.png" alt="marino-cover" />
                <Title>
                    Mundo Urbana <Badge>2022</Badge>
                </Title>
                <P>
                    Design, creation and implementation of the web page directed to
                    the tourism, for Mariño County, Nueva Esparta State, Venezuela.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://mundourbana.com/">
                            https://mundourbana.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology</Meta>
                        <span>Wordpress</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Hosting</Meta>
                        <span>Hostinger</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/marino-2.png" alt="marino-work" />
                <WorkImage src="/images/works/marino-3.png" alt="marino-work" />
            </Container>
        </Layout>
    )
}

export default Work
