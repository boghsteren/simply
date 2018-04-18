import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import {
  Menu,
  Segment,
  Image,
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
    <Image src='../static/cover2.jpg' fluid />
    <div
      style={{
        position: 'relative',
        marginTop: '-700px',
        zIndex: 99
      }}
    >
      <Container>
        <Header size={'huge'}>
          Look around and get in touch if I can help
        </Header>
        <Header>I do digital strategy, business and development</Header>
      </Container>
    </div>
  </div>
