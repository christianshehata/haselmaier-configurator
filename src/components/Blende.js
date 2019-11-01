import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import blende_video from '../assets/blende_video.mp4';


class Blende extends Component {
    state = {
        open: false,
        disable: false
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleBlende = (blende) => {
        this.setState({ open: false});
        this.props.callback(blende)
    };



    render() {
        return (
        <>
        <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal}>4. Blende</button>
        <div className={'divider ' + (this.props.chosen && 'done')} />

        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={blende_video} type="video/mp4"/>
        </video>
        <h2>Gewünschte Blendeneinstellung</h2>
            {this.checkMonitor}
        <div>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleBlende('X')} disabled={this.state.disable}> Keinen </button>
            <button className="btn btn-2 btn-2a" onClick={() => this.handleBlende('B')} disabled={this.state.disable}> Voller Blendschutz </button>
        </div>
        </Modal>
        </>
        )
    }

}

export default Blende;