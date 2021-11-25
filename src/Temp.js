import React from 'react';

class Temp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        result: null,
        interval: 10000
      };
    }
  
    componentDidMount() {
        console.log('Temp Component Mounted')
        this.updateTimer = setInterval(() => this.getData(), 10000);
        
        this.getData();
    }

    getData(){
        console.log('Temp Component getData()')
        fetch("http://192.168.0.67:8087/temps/average/10sec")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              result: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }
  
    render() {
      const { error, isLoaded, result } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            result
        );
      }
    }
  }
  export default Temp