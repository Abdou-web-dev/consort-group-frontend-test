import { FunctionComponent } from "react";

interface SingleImageProps {
  image: { id: string } | any;
}

export const SingleImage: FunctionComponent<SingleImageProps> = ({ image }) => {
  let views = ""; //make a function that returns rnadom number between 20 and 5000

  return (
    <div className="image-wrapper">
      <img src={image.urls.regular} loading="lazy" alt="" />
      <img
        width={`15px`}
        height={`15px`}
        src={image.user.profile_image.large}
        alt=""
        className="im-icon"
      />
      <span>{image.user.first_name}</span>
      <span>{image.likes}</span>
      <span>{views}</span>
    </div>
  );
};
