import React from 'react'
import fetch from 'isomorphic-unfetch'
export default class Weather extends React.Component {
 static async getInitialProps () {
   const res = await fetch('https://api.github.com/repos/zeit/next.js')
   const data = await res.json()
   console.log(data);
   return {kiirus: data.stargazers_count}
 }
 render (){
   return (
     <div>
      Tuulekiirus {this.props.kiirus}
     </div>
   )
 }
}
