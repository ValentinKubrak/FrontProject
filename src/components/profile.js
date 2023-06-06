class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: null,
            isLoaded: false
        };
    }
  
    componentDidMount() {
        const latitude = '49.23'
        const longitude = '31.88'
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,windspeed_10m,winddirection_10m&windspeed_unit=ms&timezone=Europe%2FKiev&forecast_days=3`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ items: data.hourly, isLoaded: true });
        })
        .catch((error) => {
            console.log(error);
            this.setState({ error: error.message, isLoaded: true });
        });
      }
  
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <table>
                    <thead>
                        <tr>
                        <th>00:00</th>
                        <th>03:00</th>
                        <th>06:00</th>
                        <th>09:00</th>
                        <th>12:00</th>
                        <th>15:00</th>
                        <th>18:00</th>
                        <th>21:00</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.time.slice(0, 9).map((time, index) => (
                        <tr key={index}>
                            {items.time.slice(index * 24, index * 24 + 24).map((subTime, subIndex) => {
                            if (subIndex % 3 === 0) {
                                const dataIndex = index * 24 + subIndex;
                                return (
                                <td key={subIndex}>
                                    <div>Темп: {items.temperature_2m[dataIndex]}°C</div>
                                    <div>Опади: {items.precipitation[dataIndex]}mm</div>
                                    <div>Шв. Вітру: {items.windspeed_10m[dataIndex]}m/s</div>
                                    <div>Напрям Вітру: {items.winddirection_10m[dataIndex]}°</div>
                                </td>
                                );
                            }
                            return null;
                            })}
                        </tr>
                        ))}
                    </tbody>
                </table>

            )
        }
    }
}

ReactDOM.render(<WeatherForecast />,document.getElementById("root"));