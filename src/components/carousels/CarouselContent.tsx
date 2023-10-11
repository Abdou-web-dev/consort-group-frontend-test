import { Rate } from "antd";
import { FunctionComponent } from "react";

interface CarouselContentProps {
  h2: string;
  h4: string;
  h5: string;
  h3: string;
  rankingValue: number;
}

export const CarouselContent: FunctionComponent<CarouselContentProps> = ({
  h2,
  h4,
  h5,
  h3,
  rankingValue,
}) => {
  let h3_phrase: string = h3.replace(/(.{30})/g, "$1<br>");

  function textFold(input: string, lineSize: number) {
    const output = [];
    let outputCharCount = 0;
    let outputCharsInCurrentLine = 0;
    for (var i = 0; i < input.length; i++) {
      const inputChar = input[i];
      output[outputCharCount++] = inputChar;
      if (inputChar === "\n") {
        outputCharsInCurrentLine = 0;
      } else if (outputCharsInCurrentLine > lineSize - 2) {
        output[outputCharCount++] = "\n";
        outputCharsInCurrentLine = 0;
      } else {
        outputCharsInCurrentLine++;
      }
    }
    return output.join("");
  }

  return (
    <div className="carousel-content-container">
      {/* <h3>{textFold(h3, 10)}</h3> */}
      <h3>{h3}</h3>
      <div className="footer-content">
        <div className="author-infos">
          <h2>{h2}</h2>
          <h4>{h4}</h4>
          <h5>{h5}</h5>
        </div>
        <div className="rate-wrapper">
          <Rate
            className=""
            disabled
            defaultValue={rankingValue}
            style={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};
