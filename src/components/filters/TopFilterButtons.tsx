import { FunctionComponent } from "react";
import { CategoryFilterButton } from "./CategoryFilterButton";

interface TopFilterButtonsProps {}

export const TopFilterButtons: FunctionComponent<
  TopFilterButtonsProps
> = () => {
  let labels = [
    "All",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "Product Design",
    "Typography",
    "Web Design",
  ];

  return (
    <div>
      {labels.length &&
        labels?.map((label, index) => {
          return <CategoryFilterButton key={index} label={label} />;
        })}
    </div>
  );
};
