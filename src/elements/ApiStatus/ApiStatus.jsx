import React from 'react';
import ApiStatusService from "../../services/ApiStatusService/ApiStatusService";
import './ApiStatus.css';

class ApiStatus extends React.Component {
  constructor() {
    super();

    this.state = { data: [] };
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    ApiStatusService.register(this.handleData)
  }

  handleData(diffData) {
    this.setState({ data: diffData })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="card ApiStatus">
        <h1>Api status</h1>
        {data.map(api => (
          <div>
            <h2 className="flex flex-jb">
              <span className="m-r">{api.name}:</span>
              <span>{api.status ? "up" :"down" }</span>
            </h2>
            <div>
              {api.endpoints.map(endpt => (
                <h3 className="flex flex-jb">
                  <span className="m-r">{endpt.name}:</span>
                  <span>{endpt.status ? "up" :"down" }</span>
                </h3>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ApiStatus;
