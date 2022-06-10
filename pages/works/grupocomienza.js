import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage } from "../../components/work";

const Work = () => {
    return (
        <Layout title="Grupo comienza">
            <Container>
                <WorkImage src="/images/works/grupo-1.png" alt="marino-cover" />
                <Title>
                    Grupo comienza <Badge>2022</Badge>
                </Title>
                <P>Design, creation and implementation of Grupocomienza's corporate
                    website</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://grupocomienza.com/">
                            https://grupocomienza.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJs, HTML5, CSS3, Javascript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Hosting</Meta>
                        <span>Namecheap</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/grupo-2.png" alt="Grupocomienza" />
            </Container>
        </Layout>

    )
}

export default Work
