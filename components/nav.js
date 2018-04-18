import Head from './head'
import Link from 'next/link'
import Router from 'next/router'
import { Menu, Container, Icon } from 'semantic-ui-react'
import { withRouter } from 'next/router'

export const Nav = ({ router }) =>
  <nav>
    <Menu
      color={'grey'}
      inverted
      borderless
      size={'mini'}
      icon='labeled'
      fixed={'top'}
      widths={8}
    >
      <Link href='/'>
        <Menu.Item color={'red'} active={router.pathname === '/'}>
          <Icon name='home' />
          Simply Digital
        </Menu.Item>
      </Link>
      <Link href='/code'>
        <Menu.Item color={'red'} active={router.pathname === '/code'}>
          <Icon name='code' />
          Websites
        </Menu.Item>
      </Link>
      <Link href='/projects'>
        <Menu.Item color={'red'} active={router.pathname === '/projects'}>
          <Icon name='wrench' />
          Projects
        </Menu.Item>
      </Link>
      <Link href='/roles'>
        <Menu.Item color={'red'} active={router.pathname === '/roles'}>
          <Icon name='id card outline' />
          Roles
        </Menu.Item>
      </Link>
      <Link href='/opinions'>
        <Menu.Item color={'red'} active={router.pathname === '/opinions'}>
          <Icon name='comment' />
          Opinions
        </Menu.Item>
      </Link>
      <Menu.Item as={'a'} href='https://github.com/boghsteren' color={'red'}>
        <Icon name='github' />
        Github
      </Menu.Item>
      <Menu.Item as={'a'} color={'red'} href='https://linkedin.com/jakobbs'>
        <Icon name='linkedin' />
        Linkedin
      </Menu.Item>
      <Menu.Item as={'a'} color={'red'} href='https://linkedin.com/jakobbs'>
        <Icon name='envelope' />
        Contact
      </Menu.Item>
    </Menu>
  </nav>

export default withRouter(Nav)
