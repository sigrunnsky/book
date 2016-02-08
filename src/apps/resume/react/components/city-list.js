MyComponents.City = React.createClass({

  render: function() {
    return (
      <ul className="collection">
      <li className="collection-item">
       <h4><b>{this.props.city.name}</b></h4>
       <b>Summary:</b> {this.props.city.summary} <br/>
       <b>Temperature: </b> {this.props.city.temperature} °F<br/>
       <b>Chance of Precipitation:</b> {this.props.city.precipProbability} %<br/>
       <b>Humidity:</b> {this.props.city.humidity} % <br/>
       <b>Wind Speed:</b> {this.props.city.windSpeed} MPH<br/>
       <b>Cloud Cover:</b> {this.props.city.cloudCover} % <br/>
       </li>
      </ul>
    );
  }
});
MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card teal">
        <div className="card-content">
        {cityElements}
        </div>
      </div>
    );
  }
});
