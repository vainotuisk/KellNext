export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
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
      <div className='kell'>
        <style jsx>{`
          @font-face {
      font-family: 'Aino';
      font-style: normal;
      font-weight: 300;


      src: local('Aino'), local('Aino'),

           url('../assets/AinoHeadline.ttf') format('truetype'), /* Safari, Android, iOS */

    }
    .kell {
  font-family: 'Aino';
  font-size: 6em;
}

    `}</style>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
