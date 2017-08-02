import Header from './Header'

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
    <Header />

    {props.children}
  </div>
)

export default Layout
