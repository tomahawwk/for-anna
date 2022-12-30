import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { fluidRange } from 'polished';
import { MoveY, FadeY } from '../helpers/Animations';

import Section from './Section';
import Content from '../elements/Content';
import Title from '../elements/Title';
import Text from '../elements/Text';
import { AnimatedWord, Button } from 'components/elements';

const StyledHero = styled.div`
  height: 100vh;
  position: relative;
`;

const StyledHeroContainer = styled(Section)`
  padding: 0;
  height: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    color: white;
    position: relative;
    z-index: 2;
  }

  .swiper-slide {
    opacity: 1 !important;
  }

  .slide-title,
  .slide-description > div {
    overflow: hidden;
  }

  .slide-description {
    display: grid;
    grid-gap: 5px;
    color: ${(props) => props.theme.colors.grey5};
  }

  .slide-pagination > div,
  .slide-title > div,
  .slide-description p {
    transition-duration: ${(props) => props.theme.transition.duration};
    transition-timing-function: ${(props) => props.theme.transition.function};
    transform: translateY(-100%);
    transition-delay: 0s;
  }

  .swiper-slide-active {
    .slide-pagination > div,
    .slide-title > div,
    .slide-description p {
      transform: translateY(0);
    }

    .slide-image img {
      opacity: 1;
      transform: translateY(0);
      &:nth-child(1) {
        transition-delay: 0.7s;
      }
      &:nth-child(2) {
        transition-delay: 0.8s;
      }
      &:nth-child(3) {
        transition-delay: 0.9s;
      }
    }

    .slide-pagination > div {
      transition-delay: 0.4s;
    }

    .slide-title > div {
      transition-delay: 0.5s;
    }

    .slide-description div {
      &:nth-child(1) p {
        transition-delay: 0.6s;
      }
      &:nth-child(2) p {
        transition-delay: 0.7s;
      }
      &:nth-child(3) p {
        transition-delay: 0.8s;
      }
    }
  }
`;

const StyledSlider = styled(Swiper)`
  @media (max-width: ${(props) => props.theme.screen.tablet}) {
    display: none;
  }
  .swiper-pagination {
    display: flex;
    grid-gap: 10px;
    justify-content: center;
  }
  .swiper-pagination-bullet {
    cursor: none;
    background: none;
    width: 12px;
    height: 12px;
    opacity: 1;
    transition-duration: .4s;
    border: 1px solid rgba(255,255,255,.2);
    opacity: 0;
    animation: ${FadeY} 1s ${props => props.theme.transition.function} forwards;
    &.swiper-pagination-bullet-active {
      transform: scale(1.3);
      border: 1px solid rgba(255,255,255,.7);
    }
    &:nth-child(1){
      animation-delay: .4s;
    }
    &:nth-child(2){
      animation-delay: .5s;
    }
    &:nth-child(3){
      animation-delay: .6s;
    }
    &:nth-child(4){
      animation-delay: .7s;
    }
  }
`;

const StyledSlide = styled(Content)`
  height: 100%;
  width: 56%;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 0px;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 50px;
`;

const StyledSlideContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 18px;
  height: 150px;
  align-self: center;
`;

const StyledSlidePagination = styled.div`
  font-size: 14px;
  overflow: hidden;

  div {
    display: flex;
  }

  span {
    letter-spacing: 0.04em;
    &:first-child {
      color: ${(props) => props.theme.colors.grey5};
      &:after {
        margin: 0 3px;
        content: '/';
      }
    }
  }
`;

const StyledSlideImage = styled(MouseParallaxContainer)`
  position: relative;
  width: 100%;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  img {
    object-fit: contain;
    position: absolute;
    transform: translateY(-20px);
    transition-duration: 0.3s;
    transition-timing-function: ${(props) => props.theme.transition.function};
    opacity: 0;
    transition-delay: 0s;
  }
`;

const StyledButton = styled(Button)`
  max-width: 240px;
  font-size: 14px;
`

const StyledQR = styled.div`
  width: 240px;
  height: 240px;
  overflow: hidden;
  position: relative;
  background: ${(props) => props.theme.colors.grey2};
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const StyledMobile = styled.div`
  display: none;
  flex-direction: column;
  text-align: center;
  color: white;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  gap: 15px;
  line-height: 1.5;
  @media (max-width: ${(props) => props.theme.screen.tablet}) {
    display: flex;
  }
`

const StyledHeroTitle = styled(Content)`
  width: 50%;
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 100;
  right: 0;
  padding-left: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 20px;
  @media (max-width: ${(props) => props.theme.screen.tablet}) {
    display: none;
  }
  p {
    font-size: 14px;
  }
  .title {
    position: relative;
    display: flex;
    letter-spacing: 2px;
    justify-content: center;
    flex-direction: column;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
      font-size: 24px;
    }
    div {
      overflow: hidden;
      &:nth-child(1) span{
        animation-delay: .4s;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
          animation-delay: .1s;
        }
      }
      &:nth-child(2) span{
        animation-delay: .5s;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
          animation-delay: .2s;
        }
      }
      &:nth-child(2){
        margin-top: -10px;
      }
      .yellow {
        color: ${(props) => props.theme.colors.yellow};
      }
    }
    span {
      display: inline-block;
      transform: translateY(-120%);
      animation: ${MoveY} 1s ${props => props.theme.transition.function} forwards;
      line-height: 130%;
      p {
        font-size: 34px;
        margin-left: 10px;
        @media (max-width: ${props => props.theme.screen.tabletMin}){
          font-size: 18px;
          font-weight: 300;
        }
      }
    }
  }
  .button {
    transform: translateY(-120%);
    opacity: 0;
    animation: ${FadeY} 1s ${props => props.theme.transition.function} forwards;
    animation-delay: .9s;
  }
  .description {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-gap: 7px;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
      display: none;
    }
    p {
      overflow: hidden;
      &:nth-child(1) span{
        animation-delay: .7s;
      }
      &:nth-child(2) span{
        animation-delay: .8s;
      }
    }
  }
  @media (max-width: ${props => props.theme.screen.tabletMin}){
    right: 0;
    width: 55%;
    z-index: 2;
    margin-top: 20px;
  }
`;

const slides = [
  {
    image: [
      {
        src: './images/slider/1-1.png',
        location: [0, 20],
        width: 90,
        height: 90,
        parallax: [0.008, 0.008],
      },
      {
        src: './images/slider/1-2.png',
        location: [45, 25],
        width: 50,
        height: 40,
        parallax: [0.013, 0.013],
      },
    ],
  },
];

const Hero: FC = () => {
  const [qrActive, setQrActive] = useState<boolean>(false);
  return (
    <StyledHero>
      <StyledHeroContainer grain>
        <StyledSlider
          effect="fade"
          slidesPerView={1}
          speed={1500}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectFade, Pagination]}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <StyledSlide>
                <StyledSlideContent>
                </StyledSlideContent>
                <StyledSlideImage className="slide-image" useWindowMouseEvents={true}>
                  {slide.image.map((image, index) => (
                    <MouseParallaxChild
                      factorX={image.parallax[0]}
                      factorY={image.parallax[1]}
                      key={index}>
                      <img
                        src={image.src}
                        alt=""
                        style={{
                          top: `${image.location[0]}%`,
                          left: `${image.location[1]}%`,
                          width: `${image.width}%`,
                          height: `${image.height}%`,
                        }}
                      />
                    </MouseParallaxChild>
                  ))}
                </StyledSlideImage>
              </StyledSlide>
            </SwiperSlide>
          ))}
        </StyledSlider>
        <StyledHeroTitle>
          <Title t1 className="title">
            <div><span>Take your</span></div>
            <div><span>gift, </span><span className="yellow">&nbsp;Anna</span></div>
          </Title>
          {qrActive ? (
            <StyledQR>
              <img src="/images/qr.png" />
            </StyledQR>
          ) : (
            <div className="button">
              <StyledButton outlined={true} animated={true} onClick={() => {setQrActive(true)}}>
                <AnimatedWord text={"CLICK_ON_ME"} />
              </StyledButton>
            </div>
          )}
        </StyledHeroTitle>
        <StyledMobile>
            <StyledQR style={{height: "320px"}}>
              <img src="/images/no-way.jpg" />
            </StyledQR>
            <p>Не-не-не, так не пойдет.<br></br> Давай, открывай на компе :)</p>
        </StyledMobile>
      </StyledHeroContainer>
    </StyledHero>
  );
};

export default Hero;
