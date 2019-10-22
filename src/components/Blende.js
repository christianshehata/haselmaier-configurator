import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import blende_video from '../assets/blende_video.mp4';



class Blende extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleBlende = (blende) => {
        this.setState({ open: false});
        if (blende === 'Keinen') {
            this.props.chosenBlendeKeinen();
        } else if (blende === 'Voller') {
            this.props.chosenBlendeVoll();
        }
    };



    render() {
        return (
        <>
        <button id="blende" className="navBtn" onClick={this.onOpenModal}>4. Blende</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <video autoPlay={false} height="300" width="500" controls playsinline={false}>
        <source src={blende_video} type="video/mp4"/>
        </video>
        <h2>Gewünschte Blendeneinstellung</h2>
        <div>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleBlende('Keinen')}> Keinen </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleBlende('Voller')}> Voller Blendschutz </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Blende;