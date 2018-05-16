import Head from './head'
import Link from 'next/link'
import Router from 'next/router'
import { Menu, Container, Icon } from 'semantic-ui-react'
import { withRouter } from 'next/router'

export const Nav = ({ router }) =>
  <div>
    {' '}<noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57C93SN" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
      }}
    />{' '}
    <nav style={{ marginBottom: '50px' }}>
      <Menu
        color={'grey'}
        inverted
        size={'mini'}
        icon='labeled'
        widths={7}
        stackable
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
            Consultancy
          </Menu.Item>
        </Link>
        <Link href='/roles'>
          <Menu.Item color={'red'} active={router.pathname === '/roles'}>
            <Icon name='id card outline' />
            Roles
          </Menu.Item>
        </Link>

        <Menu.Item as={'a'} href='https://github.com/boghsteren' color={'red'}>
          <Icon name='github' />
          Github
        </Menu.Item>
        <Menu.Item
          as={'a'}
          color={'red'}
          href='https://www.linkedin.com/in/jakobbs/'
        >
          <Icon name='linkedin' />
          Linkedin
        </Menu.Item>
        <Menu.Item as={'a'} color={'red'} href='mailto:jakob@simply-digital.dk'>
          <Icon name='envelope' />
          Contact
        </Menu.Item>
      </Menu>
    </nav>
  </div>

export default withRouter(Nav)
