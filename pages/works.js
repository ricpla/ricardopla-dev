import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import grupo from '../public/images/works/grupo-1.png'
import marino from '../public/images/works/marino-1.png'
import CoverImage from '../components/coverImage'
import cMujer from '../public/images/works/gus-1.png'
import funda from '../public/images/works/funda-1.png'
import ricdev from '../public/images/works/ricdev-2.png'
import laguia from '../public/images/works/5404138m.png'
import tableFast from '../public/images/works/tablefast-portada.png'
import urbanago from '../public/images/works/urbanago.png'
import daraval from '../public/images/works/daraval.png'
import mequieromudar from '../public/images/works/mequieromudar.png'
import librecompra from '../public/images/works/librecompra.png'
import tarjetaurbana from '../public/images/works/tarjetaurbana.png'
import mundourbana from '../public/images/works/mundourbana.png'

// Update Main

const Works = () => {
  return (
    <Layout>
      <Container>
        <CoverImage />
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="tableFast"
              title="TableFast"
              thumbnail={tableFast}
            >
              Mobile application for restaurant services
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="urbanaGo" title="UrbanaGo" thumbnail={urbanago}>
              Entertainment platform
            </WorkGridItem>
          </Section>
          {/* <Section>
                        <WorkGridItem id="meQuieroMudar" title="MeQuieroMudar" thumbnail={mequieromudar}>
                            Movil application for the search of commercial services
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="libreCompra" title="LibreCompra" thumbnail={librecompra}>
                            Movil application for the search of commercial services
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="darAval" title="DarAval" thumbnail={daraval}>
                            Movil application for the search of commercial services
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="tarjetaUrbana" title="Tarjeta Urbana" thumbnail={tarjetaurbana}>
                            Movil application for the search of commercial services
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="mundoUrbana" title="Mundo Urbana" thumbnail={mundourbana}>
                            Movil application for the search of commercial services
                        </WorkGridItem>
                    </Section> */}
          <Section>
            <WorkGridItem id="laGuia" title="La Guía App" thumbnail={laguia}>
              Movil application for the search of commercial services
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ricardopla"
              title="Ricardo Pla Portfolio"
              thumbnail={ricdev}
            >
              My Personal Website
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="marinoturismo"
              title="Mariño turismo"
              thumbnail={marino}
            >
              Web for Mariño Turismo
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="grupocomienza"
              title="Grupo comienza"
              thumbnail={grupo}
            >
              Corporative Web Grupo comienza
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="funda"
              title="Fundación Santiago Mariño"
              thumbnail={funda}
            >
              Web for Santiago Mariño Foundation
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="cMujer" title="CMujerPositiva" thumbnail={cMujer}>
              Landing page for CMujerPositiva
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
