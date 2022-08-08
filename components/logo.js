import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import {AiOutlineCode} from 'react-icons/ai'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  span {
    transition: 200ms ease;
  }

  &:hover span {
    transform: rotate(-20deg);
  }
`

const Logo = () => {

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <span>
          <AiOutlineCode />
          </span>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
           Sifat Bhuiyan 
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
