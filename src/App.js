import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Lote, Empreendimento } from './style';
import LoteDetalhe from './components/LoteDetalhe';


const AnyReactComponent = ({ text }) => {
  const [isShowDetails, showDetails] = useState(false);

  return (

    <Lote onClick={() => showDetails(true)}>
      {isShowDetails && <LoteDetalhe>
        <button onMouseOver={showDetails}>Click</button>
      </LoteDetalhe>}
      <h4>{text}</h4>
    </Lote>
  )
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -12.552039,
      lng: -55.7134962
    },
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDMUd2TyUzjQDhNksbiKQ0zT95gEjbGBPw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Empreendimento
            lat={-12.552039}
            lng={-55.7134962}
          >
            <AnyReactComponent
              lat={-12.552039}
              lng={-55.7134962}
              text="My Marker"
            />
            <AnyReactComponent
              lat={-12.552042}
              lng={-55.713469}
              text="My Marker"
            />
          </Empreendimento>
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;