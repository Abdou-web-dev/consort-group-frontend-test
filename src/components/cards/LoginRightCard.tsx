import { Button, Carousel } from "antd";
import { FunctionComponent, MutableRefObject, useRef, useState } from "react";
import prev_arrow from "../../assets/img/arrow_left.svg";
import next_arrow from "../../assets/img/arrow_right.svg";
import { CarouselContent } from "../carousels/CarouselContent";
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
          // style={{ background: "gray", minHeight: "10rem" }}
          dots={false}
          dotPosition="right"
          ref={ref}
          pauseOnHover
          autoplay={true}
          draggable={true}
          // currentSlide={currentSlide}
          afterChange={(currentSlide) => {
            setCurrentSlide(currentSlide);
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
