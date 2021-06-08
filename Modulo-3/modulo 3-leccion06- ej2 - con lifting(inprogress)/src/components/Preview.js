import "../stylesheets/App.scss";

const Preview = (props) => {
  return (
    <>
      <p>
        {props.number}
        <i className="fas fa-heart"></i>
      </p>
    </>
  );
};

export default Preview;
