export const NpsContainer = (props) => {
  return (
    <div className="bg-primary fg-2 p-1x b-round large-shadow">
      <div className="d-flex g-1x f-collum f-center p-relative">
        <div className="t-large">NPS geral</div>
        <img className="half-w" src={props.icon} alt="a" />
        <div>NPS Score: 75</div>
      </div>
    </div>
  );
};
