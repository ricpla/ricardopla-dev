import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="TableFast">
            <Container>
                <WorkImage src="/images/works/tablefast_1.png" alt="laguia-cover" />
                <Title>
                    TableFast <Badge>2022</Badge>
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

                <WorkImage src="/images/works/tablefast_2.png" alt="laguia-work" />
                <WorkImage src="/images/works/tablefast_3.png" alt="laguia-work" />
                <WorkImage src="/images/works/tablefast_4.png" alt="laguia-work" />
            </Container>
        </Layout>
    )
}

export default Work
