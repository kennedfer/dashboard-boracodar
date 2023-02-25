export const TextIcon = (props) => {
  return (
    <div className="d-flex f-v-center g-min">
      <div className={`smaller-${props.icon} ${props.gradient}-gradient`}></div>
      <div>{props.text}</div>
    </div>
  );
};
