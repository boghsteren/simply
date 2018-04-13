import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import {
  Menu,
  Segment,
  Header,
  Container,
  Card,
  Icon,
  Divider
} from 'semantic-ui-react'
import { MainChoices } from '../components/mainchoices'

export default () =>
  <div>
    <Head title='Home' />
    <Nav />
    <Container>
      <Header size={'huge'} textAlign='center'>
        Welcome to my place
      </Header>
      <Divider section hidden />
      <Header size={'huge'} textAlign='center'>
        <Icon color={'red'} name='arrow circle down' />
      </Header>
      <Divider section hidden />

      <Header size={'huge'} textAlign='center'>
        I do digital and product strategy, agile delivery and a bit of code
      </Header>
      <Divider section hidden />

      <Header size={'huge'} textAlign='center'>
        <Icon color={'red'} name='arrow circle down' />
      </Header>
      <Divider section hidden />

      <Header size={'huge'} textAlign='center'>
        Take a look around and get in touch if I can help you out
      </Header>
    </Container>
    <MainChoices />
  </div>
