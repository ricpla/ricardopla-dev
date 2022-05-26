import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article';

import grupo from '../public/images/works/grupo-1.png'
import marino from '../public/images/works/marino-1.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4} >
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="marinoturismo" title="Mariño turismo" thumbnail={marino}>
                            Web for Mariño Turismo
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="grupocomienza" title="Grupocomienza" thumbnail={grupo}>
                            Corporative Web Grupocomienza
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
