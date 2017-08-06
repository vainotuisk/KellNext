import fetch from 'isomorphic-unfetch'
export default class Ilm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className='ilm'>
        <style jsx>{`
          @font-face {
      font-family: 'Aino';
      font-style: normal;
      font-weight: 300;


      src: local('Aino'), local('Aino'),

           url('../assets/assets/AinoHeadline.ttf') format('truetype'), /* Safari, Android, iOS */

    }
    .ilm {
  font-family: 'Aino';
  font-size: 6em;
}

    `}</style>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
