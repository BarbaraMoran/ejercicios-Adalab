import "../stylesheets/App.scss";

const Button = (props) => {
  const handleClick = () => {
    props.handleClick();
  };

  return <input type="button" value="DALE LIKE!!" onClick={handleClick} />;
};

export default Button;
