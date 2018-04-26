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
  Divider,
  Transition
} from 'semantic-ui-react'

export default () =>
  <div>
    <Head title='Home' />
    <Nav />
    <Transition animation={'fade'} transitionOnMount duration={1000}>
      <div>
        <div style={{ marginTop: '-50px' }}>
          <Image src='../static/cover2.jpg' fluid />
          <div
            style={{
              position: 'relative',
              marginTop: '-50%',
              zIndex: 99
            }}
          >
            <Container text>
              <Header>I do digital strategy, business and development</Header>
            </Container>
          </div>
        </div>
      </div>
    </Transition>
  </div>
