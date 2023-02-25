export const GraphItem = (props) => {
  const item = props.item;

  return (
    <div className="d-flex f-bottom full-h f-collum">
      <div className="fg-1"></div>
      <div className="d-flex f-collum f-h-center f-center f-h-center">
        <div style={{ height: item.value * 1.5 + "px" }} className="bar" />
        <div>{item.day}</div>
      </div>
    </div>
  );
};
