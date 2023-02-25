import { TextIcon } from "./TextIcon";

export const SellsInfoContainer = (props) => {
  return (
    <div className="fg-1 d-flex f-collum g-0x">
      <div className="t-large full-w md-t-center">Vendas por dia da semana</div>

      <TextIcon icon="triangle" gradient="green" text="dia com mais vendas" />
      <div className="t-large">quarta feira</div>

      <div></div>

      <TextIcon
        icon="down-triangle"
        gradient="red"
        text="dia com menos vendas"
      />
      <div className="t-large">domingo</div>
    </div>
  );
};
