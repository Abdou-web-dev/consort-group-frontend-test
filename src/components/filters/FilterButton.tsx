import { Button } from "antd";
import { FunctionComponent } from "react";
import filter_icon from "../../assets/img/filter.svg";

interface FilterButtonProps {}

export const FilterButton: FunctionComponent<FilterButtonProps> = () => {
  return (
    <Button
      className="right-filter-btn"
      icon={
        <>
          <img width={`25px`} src={filter_icon} alt="" />
        </>
      }
    >
      <span>Filters</span>
    </Button>
  );
};
