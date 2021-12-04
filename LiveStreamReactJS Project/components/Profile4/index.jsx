import React from "react";
import "./Profile4.css";

function Profile4(props) {
  const { rectangle41, name, className } = props;

  return (
    <div className={`profile-4 ${className || ""}`}>
      <div className="flex-row-9">
        <img className="rectangle-41" src={rectangle41} />
        <div className="name-4 ceracompactpro-medium-blue-charcoal-16px">{name}</div>
        <div className="x5m-ago ceracompactpro-regular-normal-blue-charcoal-12px">5m ago</div>
      </div>
      <div className="flex-row-10 ceracompactpro-regular-normal-blue-charcoal-12px">
        <div className="get-thats-link">Get that’s link</div>
        <img className="bxbx-link" src="/img/bx-bx-link@2x.svg" />
        <div className="text-1">www.webservice/info.com</div>
      </div>
    </div>
  );
}

export default Profile4;
