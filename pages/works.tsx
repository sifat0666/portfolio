import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { WorkGridItem } from '../components/GridItem'
import Section from '../components/Section'
// import { WorkGridItem } from '../components/GridItem'
// import Section from '../components/Section'

const Works = () => {
  return (
    <Container>
        <Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail='/images/3.jpg'>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail='/images/1.jpg'
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail='/images/2.png'
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail='/images/4.png' title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>
        </Heading>
    </Container>
  )
}

export default Works