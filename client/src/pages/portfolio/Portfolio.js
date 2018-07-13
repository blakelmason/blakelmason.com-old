import React, { Component } from 'react';
import './portfolio.css';

// images
import hangman from '../../images/hangman.gif';
import dnd from '../../images/dnd.gif';
import darkSouls from '../../images/darkSouls.gif';
import trivia from '../../images/trivia.gif';
import fill from '../../images/fill.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container animated">
        <div className="row">
          <div className="col text-left bg-light border rounded m-3">
            <h3 className="mt-3 mb-0 font-weight-bold">Portfolio</h3>
            <hr className="mt-3 mb-4" />
            <div className="row text-center">
              <PortfolioCard image={hangman} href={'https://blakelmason.github.io/projects/hangman-adventure/index.html'} text="Hangman Adventure!" />
              <PortfolioCard image={dnd} href={'https://aaronsy1.github.io/firstGroupProject/spells.html'} text="D&D Tool" />
              <PortfolioCard image={darkSouls} href={'https://blakelmason.github.io/projects/giphy-tool/index.html'} text="Giphy Tool" />
              <PortfolioCard image={trivia} href={'https://blakelmason.github.io/projects/trivia-game/index.html'} text="Trivia Game" />
            </div>
          </div>
        </div>
      </div >
    )
  }
};

const PortfolioCard = (props) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 pb-3">
      <div className="card border-0">
        <div className="position-relative bg-dark rounded-top">
          <img className="card-img-top image-rectangle" src={props.image} alt="Card" />
          <img className="card-img-top image-fill" src={fill} alt="Card" />
        </div>
        <div className="card-body rounded-bottom bg-white">
          <a href={props.href} target="__blank" className="btn btn-light w-100 border">{props.text}</a>
        </div>
      </div>
    </div>
  )
}