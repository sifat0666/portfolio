import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>    
      <Container>

        <Box 
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a full-stack developer based in Bangladesh
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Sifat Bhuiyan
          </Heading>
          <p>Digital Creator( Developer / Product Designer )</p>
          </Box>
          {/* <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align='center'>
            <Image
              c
            />
          </Box> */}
          <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/sifat3.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
        </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a freelance and a full-stack developer based in Dhaka with a
          passion for building digital services/stuff I want. I have a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, I love
          playing guitar and exploring new music.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Dhaka , Bangladesh.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Stepped foot in computer programming. Had a taste of all the possibilities and got addicted
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Inrolled for BSc in Computer Science and Engineering
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Working on various projects to improve my skills
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Playing Guitar, Photography, Astronomy, Machine Learning
        </Paragraph>
      </Section>
        
      </Container>
      </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
