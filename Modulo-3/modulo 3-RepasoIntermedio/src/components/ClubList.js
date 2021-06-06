import React from "react";
import "../stylesheets/ClubList.scss";
import Club from "./Club";

const ClubList = (props) => {
  return (
    <ul className="list">
      {props.clubsData.map((eachClub) => {
        return (
          <Club
            icon={eachClub.fa}
            name={eachClub.name}
            members={eachClub.members}
            data={props.clubsData}
          />
        );
      })}
    </ul>
  );
};

export default ClubList;
