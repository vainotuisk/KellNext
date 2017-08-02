import Layout from '../components/MyLayout.js'
import Clock from '../components/clock.js'
import Ilm from '../components/ilm.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <div>
    <style jsx>{`
      @font-face {
  font-family: 'Aino';
  font-style: normal;
  font-weight: 300;


  src: local('Aino'), local('Aino'),

       url('../assets/assets/AinoHeadline.ttf') format('truetype'), /* Safari, Android, iOS */

}
.kell {
font-family: 'Aino';
font-size: 6em;
}

`}</style>


    Kiirus:  {props.shows.wind.speed}
    Suund: {props.shows.wind.deg}
    Temperatuur: {Math.round(props.shows.main.temp) -273}
</div>
    <Clock/>
    <Ilm/>
  </Layout>

)

Index.getInitialProps = async function() {
  const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Parnu&appid=312148cec8dfac78058217072b44201e')
  const data = await res.json()

//  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
