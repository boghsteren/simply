import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import '../style.css'
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
    <Head
      title='Home - Simply Digital'
      description='I am a seasoned digital generalist with a long track record.'
    />
    <Nav />
    <Transition animation={'fade'} transitionOnMount duration={1000}>
      <div>
        <div>
          <div className='show-for-desktop'>
            <Image src='/static/cover2.png' fluid />
          </div>
          <Container text>
            <div
              style={{
                position: 'fixed',
                top: '20%',
                textAlign: 'center',

                zIndex: 99
              }}
            >
              <Header>I do digital strategy, business and development</Header>
            </div>
          </Container>
        </div>
      </div>
    </Transition>
  </div>
