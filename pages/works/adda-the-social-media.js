import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ecomerce">
    <Container>
      <Title>ADDA the social-media</Title>
      <P>
        ADDA the social-media is a site to interact with your friends.You can
        post content, like and comment others, Save liked posts, Search for
        profile and content and do many more things
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://adda-the-social-media.vercel.app">
            https://adda-the-social-media.vercel.app{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NextJS, Sanity</span>
        </ListItem>
      </List>
      <p style={{ padding: '10px' }}>
        welcome to ADDA the social media here you can browse other pepoles post
        a and create your own post
      </p>
      <WorkImage src="/images/work/adda/homepage.png" alt="homepage" />
      <p style={{ padding: '10px' }}>
        To create your post or like and comment on other you have to create an
        account with your account google account
      </p>
      <WorkImage src="/images/work/adda/oauth.png" alt="oauth" />
      <p style={{ padding: '10px' }}>
        If you have an account you can post your picture or video on your
        account and like, comment others post
      </p>
      <WorkImage src="/images/work/adda/upload.png" alt="upload" />
      <p style={{ padding: '10px' }}>This is how your post will look like</p>
      <WorkImage src="/images/work/adda/post.png" alt="upost" />
      <p style={{ padding: '10px' }}>
        we will save all of your liked photos or videos
      </p>
      <WorkImage src="/images/work/adda/profile-liked.png" alt="profile" />
      <p style={{ padding: '10px' }}>
        you can also search through all the content and profiles in the website
      </p>
      <WorkImage src="/images/work/adda/search.png" alt="Search" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
