import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'

class SliderBanner extends React.Component{
  render() {
    var settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      centerMode: true,
      adaptiveHeight: true
    }
    return (
      <span className="image object">
        <Slider {...settings}>
        <div><img src='/images/borabora1.jpg' /></div>
        <div><img src='/images/borabora2.jpg' /></div>
        <div><img src='/images/brasileirinho.jpg' /></div>
          <div><img src='/images/southernv38.jpg' /></div>
          <div><img src='/images/bapauhle.jpg' /></div>
          <div><img src='/images/robertobarros.jpg' /></div>
          <div><img src='/images/vagamundo.jpg' /></div>
          <div><img src='/images/vaga05.jpg' /></div>
          <div><img src='/images/greenomadtop.jpg' /></div>
        </Slider>
      </span>
    );
  }
}

export default SliderBanner