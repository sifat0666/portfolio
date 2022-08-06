import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineCode} from 'react-icons/ai'


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`


const Logo = () => {
    // const footPrintImg = `/image/footprint${useColorModeValue('', '-darka')}.png`
  return (
    <Link href='/'>
        <LogoBox>
            {/* <Image src={footPrintImg} height={20} width={20} alt='logo' /> */}
            <AiOutlineCode height={20} width={20} cursor='pointer'/>
            <Text 
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c'
                fontWeight='bold'
                ml={3}
            >
                Sifat Bhuiyan
            </Text>
        </LogoBox>
    </Link>
  )
}

export default Logo