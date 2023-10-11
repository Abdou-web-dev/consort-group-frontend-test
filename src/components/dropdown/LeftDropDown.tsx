import { Select } from "antd";
import { FunctionComponent, useState } from "react";

interface LeftDropDownProps {}

export const LeftDropDown: FunctionComponent<LeftDropDownProps> = () => {
  const [dropValue, setDropValue] = useState<string>("Popular");
  return (
    <Select
      className={"tests"}
      value={dropValue}
      onChange={(value) => {
        setDropValue(value);
        console.log(value, "value");
      }}
      size={"large"}
      filterOption={(input, option) => (option?.value ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        //if optionA.value is null ou undefined then "" will be returned instead, and if it has a value , this value will be returned and used
        (optionA?.value ?? "")
          .toLowerCase()
          .localeCompare((optionB?.value ?? "").toLowerCase())
      }
      style={{ width: "100px" }}
      options={[
        { value: "Popular", label: "Popular" }, //label is the text shown on the menu
        { value: "Recent" },
        { value: "Best rated" },
        { value: "In theaters" },
      ]}
      status={""}
      // suffixIcon={null}
      // bordered={true}
    />
  );
};
