import Head from './head'
import Link from 'next/link'
import Router from 'next/router'
import { Menu, Container, Icon } from 'semantic-ui-react'
import { withRouter } from 'next/router'

export const Nav = ({ router }) =>
  <nav style={{ marginBottom: '50px' }}>
    <Menu size='huge' inverted widths={4}>
      <Link href='/'>
        <Menu.Item color={'red'} active={router.pathname === '/'}>
          <Icon name='home' />
          SIMPLY DIGITAL
        </Menu.Item>
      </Link>
      <Link href='/code'>
        <Menu.Item color={'red'} active={router.pathname === '/code'}>
          <Icon name='code' />
          Websites I have built
        </Menu.Item>
      </Link>
      <Link href='/projects'>
        <Menu.Item color={'red'} active={router.pathname === '/projects'}>
          <Icon name='wrench' />
          Projects I have worked on
        </Menu.Item>
      </Link>
      <Link href='/roles'>
        <Menu.Item color={'red'} active={router.pathname === '/roles'}>
          <Icon name='id card outline' />
          Roles I have had
        </Menu.Item>
      </Link>
    </Menu>
  </nav>

export default withRouter(Nav)
