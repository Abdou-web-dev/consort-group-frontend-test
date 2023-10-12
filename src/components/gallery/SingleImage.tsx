import { Button, Image } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import heart_dark from "../../assets/img/heart_dark.svg";
import heart_red from "../../assets/img/heart_red.svg";
import like_black from "../../assets/img/like_black.svg";
import like_icon_not_filled from "../../assets/img/like_icon.svg";
import view_icon from "../../assets/img/view_icon.svg";
import views_icon from "../../assets/img/views.svg";

import { UnsplashImageType } from "../../types/UnsplashImage";

interface SingleImageProps {
  image: UnsplashImageType;
}

export const SingleImage: FunctionComponent<SingleImageProps> = ({ image }) => {
  const [visible, setVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [randomString, setRandomString] = useState(generateRandomString());
  const [views, setViews] = useState(randomInteger(20, 50000));
  const [likeIcon, setLikeIcon] = useState(like_icon_not_filled);
  const [likes, setLikes] = useState(image?.likes);
  const [heartIcon, setHeartIcon] = useState(heart_dark);
  //
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function formatNumber(number: number) {
    if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(1);
      return `${formattedNumber}k`;
    }
    return number.toString();
  }

  function generateRandomString() {
    let strings = ["PRO", "TEAM"];

    var randomIndex = Math.floor(Math.random() * strings?.length);
    var randomElement = strings[randomIndex];
    return randomElement;
  }

  const handleLikeClick = () => {
    if (isLiked) {
      // Decrement the number of likes when "unlike" button is clicked
      setLikes(likes - 1);
      setLikeIcon(like_icon_not_filled);
      setHeartIcon(heart_dark);
    } else {
      // Increment the number of likes when "like" button is clicked
      setLikes(likes + 1);
      setLikeIcon(like_black);
      setHeartIcon(heart_red);
    }
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    // Generate random string and views only on initial render
    setRandomString(generateRandomString());
    setViews(randomInteger(20, 50000));
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="single-image-container">
      <img
        className="unsplash-image"
        src={image.urls.regular}
        loading="lazy"
        alt=""
      />
      <div className="like-view-btns-wrapper">
        <Button
          className="view-btn"
          onClick={() => setVisible(true)}
          icon={<img src={view_icon} alt="" />}
        ></Button>
        <Button
          className="like-btn"
          onClick={() => {
            handleLikeClick();
          }}
          icon={<img src={likeIcon} alt="" />}
        ></Button>
      </div>
      <div className="footer-infos">
        <div className="left-content">
          <Button>
            <img
              className="avatar-icon"
              src={image.user.profile_image.large}
              alt=""
            />
          </Button>
          <span className="user-first_name">{image.user.name}</span>
          <div className="word">
            {/* <span>{generateRandomString()}</span> */}
            <span>{randomString}</span>
          </div>
        </div>
        <div className="right-content">
          <div className="likes-wrapper">
            <img src={heartIcon} alt="" />
            <span className="likes">{likes}</span>
          </div>
          <div className="views-wrapper">
            <img src={views_icon} alt="" />
            <span className="views">{formatNumber(views)}</span>
            {/* <span className="views">{views}</span> */}
          </div>
        </div>
      </div>
      <>
        {/* that's the image displayed on a modal window when the user clicks on view icon */}
        <Image
          className="test-image"
          width={200}
          style={{ display: "none" }}
          src=""
          preview={{
            visible,
            // scaleStep,
            src: image.urls.regular,
            onVisibleChange: (value: boolean) => {
              setVisible(value);
            },
          }}
        />
      </>
    </div>
  );
};
