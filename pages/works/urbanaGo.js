import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="UrbanaGo">
      <Container>
        <WorkImage src="/images/works/urbanago.png" alt="marino-cover" />
        <Title>
          UrbanaGo <Badge>2022</Badge>
        </Title>
        <P>Entertainment platform</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.urbanago.com/">
              https://www.urbanago.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Nextjs, TaildwindCSS</span>
          </ListItem>
          <ListItem>
            <Meta>Hosting</Meta>
            <span>Vercel</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/urbanago_1.png" alt="marino-work" />
        <WorkImage src="/images/works/urbanago_2.png" alt="marino-work" />
        <WorkImage src="/images/works/urbanago_3.png" alt="marino-work" />
      </Container>
    </Layout>
  )
}

export default Work
