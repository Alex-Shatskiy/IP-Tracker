const Info = (props) => {
  const { ip, country, region, timezone, isp } = props;

  return (
    <>
      <div className="infoContainer">
        <div>
          <p className="dataTitle">IP ADDRESS</p>
          <div className="data">{ip}</div>
        </div>
        <div>
          <p className="dataTitle">LOCATION</p>
          <div className="data">
            {country}, {region}
          </div>
        </div>
        <div>
          <p className="dataTitle">TIMEZONE</p>
          <div className="data">{timezone}</div>
        </div>
        <div>
          <p className="dataTitle">ISP</p>
          <div className="data">{isp}</div>
        </div>
      </div>
    </>
  );
};

export default Info;
