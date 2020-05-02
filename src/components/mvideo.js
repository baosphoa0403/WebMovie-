import React from "react";
import ModalVideo from "react-modal-video";
export default class Mvideo extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="42Gtm4-Ax2U"
          onClose={() => this.setState({ isOpen: false })}
        />
        <button onClick={this.openModal}>Open</button>
      </div>
    );
  }
}
