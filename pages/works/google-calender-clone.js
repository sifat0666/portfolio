import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ecomerce">
    <Container>
      <Title>Gadget Store</Title>
      <P>
        This is a clone of google calender app. You can add events for a date
        with differnet color badges. The events will be saved in the browser
        localStorage
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-calender-five.vercel.app/">
            https://react-calender-five.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>
      <p style={{ padding: '10px' }}>
        this is how the calender will look with different coloe badges of
        different events
      </p>
      <WorkImage src="/images/work/calender/home.png" alt="home" />
      <p style={{ padding: '10px' }}>
        By clicking any date or clicking create event button you can create a
        new card for the focused date
      </p>
      <WorkImage src="/images/work/calender/event-card.png" alt="event-card" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
