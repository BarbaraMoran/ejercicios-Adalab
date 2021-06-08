import "../stylesheets/App.scss";

const Button = (props) => {
  const handleButtonClick = () => {
    props.handleClick();
  };

  return (
    <input type="button" value="DALE LIKE!!" onClick={handleButtonClick} />
  );
};

export default Button;
