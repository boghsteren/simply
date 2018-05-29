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
  List,
  Divider,
  Label,
  Transition
} from 'semantic-ui-react'

export default () =>
  <div style={{ marginBottom: '50px' }}>
    <Head
      title='Consultancy - Simply Digital'
      description='I have consulted with a wide range of big and small companies.'
      url='http://www.simply-digital.dk/projects'
      ogImage='../static/projects.png'
    />
    <Nav />{' '}
    <Transition animation={'fade'} transitionOnMount duration={1500}>
      <Container text style={{ marginBottom: '50px', marginTop: '50px' }}>
        <div>
          <Header size={'huge'} textAlign='center'>
            Consultancy I have done
          </Header>
          Since 2015 I have worked as a consultant and advisor in a wide variety
          of roles, either as an independent consultant or freelancing with
          Translate Digital out of New Zealand. Key projects and engagements
          include:
          <Divider />
          <Header>2018</Header>
          <List>
            <List.Item>
              <List.Icon>
                <Icon name='idea' />
              </List.Icon>{' '}
              <List.Content>
                Corporate Digital and Technical Strategy for TV 2 A/S (Denmark)
              </List.Content>
            </List.Item>

            <List.Item>
              {' '}<List.Icon>
                <Icon name='idea' />
              </List.Icon>
              <List.Content>
                Innovation Workshop for Prehype (New York)
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon>
                <Icon name='settings' />
              </List.Icon>{' '}
              <List.Content>
                Platform architecture advisory for Locomotion (Germany)
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon>
                <Icon name='google' />
              </List.Icon>{' '}
              <List.Content>
                Website performance and SEO optimisation (Wordpress) for
                Plantepusherne.dk (Denmark)
              </List.Content>
            </List.Item>
            <List.Item>
              {' '}<List.Icon>
                <Icon name='calculator' />
              </List.Icon>{' '}
              <List.Content>
                Business tooling (CRM and productivity tools) and IT strategy
                for Balder (Denmark)
              </List.Content>
            </List.Item>
          </List>
          <Divider />
        </div>
        <div>
          <Header>2017</Header>
          <List>
            <List.Item>
              <List.Icon>
                <Icon name='google' />
              </List.Icon>{' '}
              <List.Content>
                Google Tag Manager, Analytics, Data Studio, Adwords and Facebook
                marketing setup and training for Annex Brewery (Denmark)
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon>
                <Icon name='google' />
              </List.Icon>
              <List.Content>
                Google Tag Manager, Analytics and Data Studio implementation for
                Parkable (New Zealand)
              </List.Content>
            </List.Item>
            <List.Item>
              {' '}<List.Icon>
                <Icon name='idea' />
              </List.Icon>
              <List.Content>
                Strategic analysis and recommendations for 9 Spokes (New
                Zealand)
              </List.Content>
            </List.Item>
            <List.Item>
              {' '}<List.Icon>
                <Icon name='cart' />
              </List.Icon>
              <List.Content>
                Implementation of new ecommerce platform (Prestashop hosted in
                Google Cloud) for byBiehl A/S (Denmark)
              </List.Content>
            </List.Item>
            <List.Item>
              {' '}<List.Icon>
                <Icon name='google' />
              </List.Icon>
              <List.Content>
                Google Tag Manager, Analytics and Data Studio implementation for
                Campable (New Zealand)
              </List.Content>
            </List.Item>
          </List>
          <Divider />
        </div>
        <div>
          <Header> 2016 & 2015</Header>
          <List>
            <List.Item>
              {' '}<List.Icon>
                <Icon name='idea' />
              </List.Icon>
              <List.Content>
                Strategic advisory for Campable/Parkable (New Zealand)
              </List.Content>
            </List.Item>
            <List.Item>
              {' '}<List.Icon>
                <Icon name='idea' />
              </List.Icon>
              <List.Content>
                Scrum training and Jira implementation for Parkable (New
                Zealand)
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon>
                <Icon name='bar graph' />
              </List.Icon>
              <List.Content>
                Data analysis (Qlik) for Callaghan Innovation (New Zealand)
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon>
                <Icon name='google' />
              </List.Icon>
              <List.Content>
                Google Tag Manager, Analytics and Data Studio implementation
                (including readership figures and advertiser reports) for The
                Spinoff (New Zealand)
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon>
                <Icon name='facebook' />
              </List.Icon>
              <List.Content>
                Adwords, Social marketing and SEO optimisation for Platinum (New
                Zealand)
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon>
                <Icon name='facebook' />
              </List.Icon>
              <List.Content>
                Adwords, Social marketing and SEO optimisation for Loaded (New
                Zealand)
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon>
                <Icon name='google' />
              </List.Icon>
              <List.Content>
                SEO review and optimisation for Rankers Reviews (New Zealand)
              </List.Content>
            </List.Item>{' '}
            <List.Item>
              <List.Icon>
                <Icon name='mobile' />
              </List.Icon>
              <List.Content>
                Mobile app strategy for Rodd & Gunn (New Zealand)
              </List.Content>
            </List.Item>
          </List>
        </div>
      </Container>
    </Transition>
  </div>
