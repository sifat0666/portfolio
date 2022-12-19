import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbecom from './../public/images/work/ecom1.png'
import thumbadda from './../public/images/work/adda/homepage.png'
import thumbcalender from './../public/images/work/calender/home.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            thumbnail={thumbecom}
            id="ecommerce"
            title="ecommerce store-front"
          >
            A ecommerce website for your business where you can sell your
            products online and get paymant via stripe
          </WorkGridItem>
        </Section>{' '}
        <Section>
          <WorkGridItem
            thumbnail={thumbadda}
            id="adda-the-social-media"
            title="ADDA the social-media"
          >
            ADDA the social-media is a site to interact with your friends.You
            can post content, like and comment others, Save liked posts, Search
            for profile and content and do many more things
          </WorkGridItem>
        </Section>{' '}
        <Section>
          <WorkGridItem
            thumbnail={thumbcalender}
            id="google-calender-clone"
            title="React Calender"
          >
            This is a clone of google calender app. You can add events for a
            date with differnet color badges. The events will be saved in the
            browser localStorage
          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"

          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"

          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
