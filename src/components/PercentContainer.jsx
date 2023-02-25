import { TextIcon } from "./TextIcon";

export const PercentContainer = (props) => {
  return (
    <div className="bg-primary p-1x large-shadow fg-1 b-round">
      <div className="p-relative full-h full-w d-flex f-collum f-center g-1x">
        <div className="t-large">{props.title}</div>
        <div className="d-flex fg-1 f-v-center p-relative">
          <div className="d-grid p-absolute f-v-center">
            <div
              className={`large-circle small-shadow ${props.gradient}-gradient`}
            ></div>
          </div>

          <div
            style={{
              background: `conic-gradient(transparent ${props.percents}%, var(--secondary) ${props.percents}%)`,
            }}
            className="large-circle iz-1"
          />

          <div className="d-grid f-h-center p-absolute full-w full-h f-v-center iz-1">
            <div className=" small-circle bg-primary"></div>
            <div className="d-grid f-h-center p-absolute full-w full-h f-v-center">
              <div>
                <div className="t-larger t-bold t-center">
                  {props.percents}%
                </div>
                <div className="t-center">alcançada</div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex f-sp-around full-w">
          <div className="d-flex g-0x">
            <TextIcon icon="circle" gradient="black" text="Alcançado" />
            <div>{props.expectedValue}</div>
          </div>

          <div className="d-flex g-0x">
            <TextIcon icon="circle" gradient={props.gradient} text="Esperado" />
            <div>{props.reachedValue}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
