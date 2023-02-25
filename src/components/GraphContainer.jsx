import { GraphItem } from "./GraphItem";

export const GraphContainer = () => {
  const data = [
    { day: "dom", value: 40 },
    { day: "seg", value: 70 },
    { day: "ter", value: 55 },
    { day: "qua", value: 100 },
    { day: "qui", value: 80 },
    { day: "sex", value: 75 },
    { day: "sab", value: 50 },
  ];

  return (
    <div className="p-relative">
      <div className="half-h full-w p-absolute bottom graph-axis"></div>

      <div className="d-flex f-sp-around g-2x md-no-gap full-h">
        {data.map((item, i) => (
          <GraphItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};
