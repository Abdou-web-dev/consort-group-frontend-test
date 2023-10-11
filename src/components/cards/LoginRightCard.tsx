import { Button, Carousel } from "antd";
import { FunctionComponent, MutableRefObject, useRef, useState } from "react";
import prev_arrow from "../../assets/img/arrow_left.svg";
import next_arrow from "../../assets/img/arrow_right.svg";
import { CarouselContent } from "../carousels/CarouselContent";
import "../styles.scss";
interface LoginRightCardProps {}
interface LoginRightCardProps {}

export const LoginRightCard: FunctionComponent<LoginRightCardProps> = () => {
  const [slide, setSlide] = useState("");
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const ref: MutableRefObject<HTMLButtonElement | null | undefined | any> =
    useRef();
  // console.log(Number(slide));

  return (
    <div
      className={`login-card-container
    ${
      Number(slide) === 0
        ? "login-card-container__slide0"
        : Number(slide) === 1
        ? "login-card-container__slide1"
        : Number(slide) === 2
        ? "login-card-container__slide2"
        : Number(slide) === 3
        ? "login-card-container__slide3"
        : ""
    }
    `}
    >
      <div className="login-carousel-btns">
        <Button
          className="prev-btn"
          icon={
            <img
              //  width={`30px`}
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
              //  width={`30px`}
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
          className="login-antd-carousel"
          dots={false}
          dotPosition="right"
          ref={ref}
          pauseOnHover
          autoplay={true}
          draggable={true}
          afterChange={(currentSlide) => {
            // setCurrentSlide(currentSlide);
            if (currentSlide === 0) {
              setSlide("0");
            }
            if (currentSlide === 1) {
              setSlide("1");
            }
            if (currentSlide === 2) {
              setSlide("2");
            }
            if (currentSlide === 3) {
              setSlide("3");
            }
          }}
          // arrows
        >
          <CarouselContent
            h2="Andi Lane"
            h3={`"We've beeen using Untitled to kick start every new project and can't imagine working without it."`}
            h4="Founder, Catalog"
            h5="Web Design Agency"
            rankingValue={5}
          />
          <CarouselContent
            h2="Jonathan Josh"
            h3={`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            cupiditate laboriosam cum, nisi."`}
            h4="Founder, CMM"
            h5="Web Design Agency"
            rankingValue={3}
          />
          <CarouselContent
            rankingValue={5}
            h2="Jean Jack"
            h3={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            est tempore."`}
            h4="Founder, CFAR"
            h5="Web Development Agency"
          />
          <CarouselContent
            rankingValue={4}
            h2="Andrea Tomitee"
            h3={`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboru"`}
            h4="Founder, LOUPAN"
            h5="Data Mining Agency"
          />
        </Carousel>
      </div>
    </div>
  );
};
