import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article';

import thumbInkDrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalkNote from '../public/images/works/walknote_eyecatch.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4} >
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="marinoturismo" title="Mariño turismo" thumbnail={thumbInkDrop}>
                            Web for Mariño Turismo
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="grupocomienza" title="Grupocomienza" thumbnail={thumbWalkNote}>
                            Corporative Web Grupocomienza
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="grupocomienza" title="Grupocomienza" thumbnail={thumbWalkNote}>
                            Corporative Web Grupocomienza
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
