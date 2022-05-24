import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage } from "../../components/work";

const Work = () => {
    return (
        <Layout title="Grupocomienza">
            <Container>
                <Title>
                    Grupocomienza <Badge>2022</Badge>
                </Title>
                <P> A Web for corporative company based in USA</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJs, HTML5, CSS3, Javascript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="">
                            About Blogpost<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/174.png" alt="Grupocomienza"/>
                <WorkImage src="/images/174.png" alt="Grupocomienza"/>
            </Container>
        </Layout>

    )
}

export default Work
