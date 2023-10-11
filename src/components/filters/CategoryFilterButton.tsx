import { Button } from "antd";
import { FunctionComponent } from "react";

interface CategoryFilterButtonProps {
  label: string;
}

export const CategoryFilterButton: FunctionComponent<
  CategoryFilterButtonProps
> = ({ label }) => {
  return (
    <Button>
      <span>{label}</span>
    </Button>
  );
};
