import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="La Guia">
            <Container>
                <WorkImage src="/images/works/5404138.png" alt="laguia-cover" />
                <Title>
                    La Guía <Badge>2022</Badge>
                </Title>
                <P>
                    Movil application for the search of commercial services
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Movil App</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Nodejs, Expo, React Native</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/s90-td-11994-02g-mockup.png" alt="laguia-work" />
                <WorkImage src="/images/works/laguia.png" alt="laguia-work" />
            </Container>
        </Layout>
    )
}

export default Work
