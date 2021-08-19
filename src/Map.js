import ReactMapGl, { Marker } from "react-map-gl";

const Map = (props) => {
  const { viewports, lat, lng, setViewports } = props;
  return (
    <>
      <div className="map">
        <ReactMapGl
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZGVhdGh0YWNvIiwiYSI6ImNrc2dzNWo4bDAwd2MydHBjeHI0cXR1ZDMifQ.eaU4INLmPs39J-VF_MpTtQ"
          }
          {...viewports}
          onViewportChange={(nextViewport) => setViewports(nextViewport)}
        >
          <>
            <Marker
              latitude={lat}
              longitude={lng}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fk%2Fa%2F2%2FB%2Fc%2Fu%2Fmap-marker-red-hi.png&f=1&nofb=1"
                style={{ width: "20px", height: "20px" }}
              />
            </Marker>
          </>
        </ReactMapGl>
      </div>
    </>
  );
};

export default Map;
