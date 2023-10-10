import { Button, Carousel } from "antd";
import { FunctionComponent, MutableRefObject, useRef, useState } from "react";
import prev_arrow from "../../assets/img/arrow_left.svg";
import next_arrow from "../../assets/img/arrow_right.svg";
import "../styles.scss";
interface LoginRightCardProps {}

export const LoginRightCard: FunctionComponent<LoginRightCardProps> = () => {
  const [slide, setSlide] = useState("");
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const ref: MutableRefObject<HTMLButtonElement | null | undefined | any> =
    useRef();

  return (
    <div className="login-card-container">
      <div className="login-carousel-btns">
        <Button
          className="prev-btn"
          icon={
            <img
              width={`30px`}
              style={{ border: "1px solid red" }}
              src={prev_arrow}
              alt=""
            />
          }
          onClick={() => {
            ref.current.prev();
          }}
        ></Button>

        <Button
          className="next-btn"
          onClick={() => {
            ref.current.next();
          }}
          icon={
            <img
              width={`30px`}
              style={{ border: "1px solid red" }}
              src={next_arrow}
              alt=""
            />
          }
        >
          {/* <RightArrow></RightArrow> */}
        </Button>
      </div>
      <div className="login-carousel-container">
        <Carousel
          // slide={slide}
          className="home-carousel-carousel"
          style={{ background: "gray" }}
          dots
          dotPosition="right"
          ref={ref}
          pauseOnHover
          autoplay={true}
          draggable={true}
          // currentSlide={currentSlide}
          afterChange={(currentSlide) => {
            // console.log(currentSlide, "currentSlide");
            setCurrentSlide(currentSlide);
          }}
          // arrows
        >
          <div>
            <h1>test1</h1>
          </div>
          <div>
            <h1>test2</h1>
          </div>
          <div>
            <h1>test3</h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
