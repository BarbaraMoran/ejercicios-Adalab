import "../stylesheets/Club.scss";

const Club = (props) => {
  const renderMembers = () => {
    return props.eachClub.members.map((member) => {
      return <li className="members">{member}</li>;
    });
  };
  return (
    <article className="article">
      <i className={`article__icon ${props.eachClub.fa}`} />
      <div className="article__info">
        <h2 className="info__name">{props.eachClub.name}</h2>
        <h3>Members:</h3>
        <ul className="info__members">{renderMembers()}</ul>
      </div>
    </article>
  );
};

export default Club;
