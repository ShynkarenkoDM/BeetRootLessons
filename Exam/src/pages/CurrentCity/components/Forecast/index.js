import React from 'react';
import axios from 'axios';

// Components

// Styles
import './styles.scss';

// --------------------

export class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      forecast: {
        main: {},
      },
    };
  }
  componentDidMount() {
    this.loadingForecast();
  }

  async loadingForecast() {
    try {
      const response = await axios.get(
        'http://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            lat: '47.83918',
            lon: '35.122242',
            cnt: '5',
            appid: '93aa659d9bc7cdec84b43ea99de93de9',
          },
        },
      );

      setTimeout(
        () =>
          this.setState({
            forecast: response.data,
            loading: false,
          }),
        3000,
      );
    } catch (error) {
      console.log('error', error);
    }
  }

  moderateForecast(forecast) {
    return {
      name: forecast.name,
      temperature: Math.floor(forecast.main.temp - 273),
    };
  }

  render() {
    const { forecast } = this.state;
    const { temperature, name } = this.moderateForecast(forecast);

    return (
      <div className="forecast">
        <p>{name}</p>
        <p>{`${temperature} C`}</p>
      </div>
    );
  }
}
