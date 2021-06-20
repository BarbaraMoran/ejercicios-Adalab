import "../stylesheets/ClubList.scss";
import Club from "./Club";

const ClubList = (props) => {
  const allClubs = props.clubsData.map((item, index) => {
    return (
      <li key={index} className="list__item">
        <Club eachClub={item} />
      </li>
    );
  });

  return <ul className="list">{allClubs}</ul>;
};

export default ClubList;
