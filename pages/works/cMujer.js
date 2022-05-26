import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage } from "../../components/work";

const Work = () => {
    return (
        <Layout title="Grupo comienza">
            <Container>
                <WorkImage src="/images/works/gus-1.png" alt="marino-cover" />
                <Title>
                CMujerPositiva <Badge>2021</Badge>
                </Title>
                <P>Design and implementation of a Landing Page for the brand
                    CmujerPositiva</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://cmujerpositiva.com/10-pasos-para-ser-una-mujer-positiva/">
                        https://cmujerpositiva.com/10-pasos-para-ser-una-mujer-positiva/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Wordpress</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/gus-2.png" alt="Grupocomienza" />
            </Container>
        </Layout>

    )
}

export default Work