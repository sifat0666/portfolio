import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Gadget Store
        </Title>
        <P>
        A ecommerce website for your business where you can sell your products online and get paymant via stripe
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://headless-ecom-with-sanity.vercel.app">
            https://headless-ecom-with-sanity.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NextJS, Sanity, Stripe</span>
          </ListItem>

        </List>
  
        <WorkImage src="/images/work/ecom1.png" alt="Gadget Store" />
        <WorkImage src="/images/work/ecom3.png" alt="Gadget Store" />
        <WorkImage src="/images/work/ecom2.png" alt="Gadget Store" />
        <WorkImage src="/images/work/ecom4.png" alt="Gadget Store" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'