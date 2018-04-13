import React from 'react'
import {
  Container,
  Reveal,
  Image,
  Divider,
  Button,
  Dimmer,
  Item,
  Card
} from 'semantic-ui-react'
import Link from 'next/link'

export const MainChoices = () =>
  <Container>
    <Divider section />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Link href='/code'>
        <Button size={'huge'} animated={'fade'}>
          <Button.Content visible>Code</Button.Content>
          <Button.Content hidden>Websites</Button.Content>
        </Button>
      </Link>
      <Link href='/projects'>
        <Button size={'huge'} animated={'fade'}>
          <Button.Content visible>Projects</Button.Content>
          <Button.Content hidden>Record</Button.Content>
        </Button>
      </Link>
      <Link href='/roles'>
        <Button size={'huge'} animated={'fade'}>
          <Button.Content visible>Roles</Button.Content>
          <Button.Content hidden>Experience</Button.Content>
        </Button>
      </Link>
    </div>
  </Container>
