import React, { Component } from "react";

import ModalVideo from "react-modal-video";
import banner1 from "../images/img/banner1.jpg";
import banner2 from "../images/img/banner2.jpg";
import banner4 from "../images/img/banner4.jpg";
import banner6 from "../images/img/banner6.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Caurosel extends Component {
  render() {
    return (
      <div>
        <div>
          <OwlCarousel items={1} className="owl-theme" loop nav margin={4}>
            <div>
              <img
                className="img"
                src={banner1}
                style={{ position: "relative" }}
              />
              <div>
                <ModalVideo
                  style={{ position: "absolute" }}
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="Rszr56AH3Co"
                  onClose={() => this.setState({ isOpen: false })}
                />
                <button onClick={this.openModal}>Open</button>
              </div>
            </div>
            <div>
              <img className="img" src={banner2} />
              <div>
                <ModalVideo
                  style={{ position: "absolute" }}
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="x3HbbzHK5Mc"
                  onClose={() => this.setState({ isOpen: false })}
                />
                <button onClick={this.openModal}>Open</button>
              </div>
            </div>
            <div>
              <img className="img" src={banner4} />
              <div>
                <ModalVideo
                  style={{ position: "absolute" }}
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="J_xN8O0Ag5U"
                  onClose={() => this.setState({ isOpen: false })}
                />
                <button onClick={this.openModal}>Open</button>
              </div>
            </div>
            <div>
              <img className="img" src={banner6} />
              <div>
                <ModalVideo
                  style={{ position: "absolute" }}
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="yiBo3wgJ860"
                  onClose={() => this.setState({ isOpen: false })}
                />
                <button onClick={this.openModal}>Open</button>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
