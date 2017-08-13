import React from 'react'
import Layout from '../components/MyLayout.js'
import Clock from '../components/clock.js'
import Ilm from '../components/ilm.js'
import Weather from '../components/weather.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Row, Col} from 'reactstrap'

const Index = (props) => (
  <Layout>
    <div className='kell'>
    <style jsx>{`
      @font-face {
  font-family: 'Aino';
  font-style: normal;
  font-weight: 100;


  src: local('Aino'), local('Aino'),

       url('../assets/AinoHeadline.ttf') format('truetype'), /* Safari, Android, iOS */

}
.kell {
font-family: 'Aino';
font-size: 3em;
}

`}</style>
    <Row>
        <Col xs="6" sm="4">Kiirus:  {Math.round(props.shows.wind.speed)}m/s</Col>
        <Col xs="6" sm="4">Suund: {Math.round(props.shows.wind.deg)}</Col>
        <Col sm="4">Temp: {Math.round(props.shows.main.temp) -273} &deg;</Col>
    </Row>
</div>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}><Clock/></Col>
    </Row>



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
