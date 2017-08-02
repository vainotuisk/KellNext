import Layout from '../components/MyLayout.js'
import Clock from '../components/clock.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Tuul Pärnus</h1>
    <ul>
    <li>Kiirus:  {props.shows.wind.speed}</li>
    <li>Suund: {props.shows.wind.deg}</li>
    </ul>
    <Clock/>
  </Layout>

)

Index.getInitialProps = async function() {
  const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Parnu&appid=312148cec8dfac78058217072b44201e')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
