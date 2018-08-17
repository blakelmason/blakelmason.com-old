import React, { Component } from 'react';
import meImage from '../../images/me.jpg';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container animated">
        <div className="row">
          <div className="col text-left bg-light border rounded m-3">
            <h3 className="mt-3 mb-0 font-weight-bold">Welcome!</h3>
            <hr className="mt-3 mb-4" />
            <img src={meImage} alt="" className="mr-3 mb-0 border rounded" id="meImage" />
            <div className="mt-3" id="meInfo">
              <p>
                Hello! I'm Blake Mason, let me share a little bit about myself. I grew up in Huntington Beach, CA and I really enjoy the beach. Warm weather and good waves, doesn't get much better than that. Grew up reading lots of books and playing video games and right now my favorite video game is the Witcher 3. When I was 19 I went on a Mormon mission in Europe for two years and I learned how to speak French fluently. Yes, I also ate lots of cheese there. They have good cheese. Went to college at BYU in Utah and that's where I met my wife, Kenzie.
              </p>
              <p>
                Before I met my wife I learned to country swing dance and took some ballroom dance classes. My first date with my wife I took her out country swing dancing and it was awesome. I still love dancing and I want to learn more partner dances. The latin ones sound fun, like salsa and bachata.
              </p>
              <p>
                Right now I have a baby daughter, her name is Rosalie. I also just began a coding bootcamp at UC Irvine. It is really fast paced, but I don't mind because the material is very interesting. By now you are probably thinking that it's good for me to learn coding, because a writing career is definitely not in my future. Anyway, thanks for reading this far and checking out my website!
              </p>
            </div>
          </div>
        </div>
      </div >
    )
  }
};
