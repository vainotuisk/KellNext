import Head from 'next/head'
import Header from './Header'
import { Container } from 'reactstrap'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <style global jsx>{`
          body {
            background: black;
            color: white;
            font-family: sans-serif;
          }
          @font-face {
      font-family: 'Aino';
      font-style: normal;
      font-weight: 600;

      src: local('Aino'), local('Aino'),

           url('../assets/assets/AinoHeadline.ttf') format('truetype'), /* Safari, Android, iOS */

    }
        `}</style>
    <Head>
      <title>Infotabloo</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <Container>
      {props.children}
    </Container>

  </div>
)

export default Layout
