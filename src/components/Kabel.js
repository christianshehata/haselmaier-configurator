import React from 'react';
import Modal from 'react-responsive-modal';
import kabel_video from '../assets/kabel_video.mp4'

class Kabel extends React.Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    handleCable = (cable) => {
        this.setState({open: false});
        this.props.callback(cable);

    };


    render() {
        return (
            <>
                <button
                    className={ 'navBtn ' + (this.props.chosen && 'done')}
                    onClick={this.onOpenModal}>5. Kabel</button>
                <div
                className={'divider ' + (this.props.chosen && 'done')}
                />
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <video autoPlay={false} height="300" width="500" controls playsInline={false}>
                <source src={kabel_video} type="video/mp4"/>
                </video>
                <h2>Kabelrücken für Relingsystem</h2>
                <div>
                    <button id='mit' className="btn btn-2 btn-2a" onClick={() => this.handleCable('M')}> Mit Kabelrücken </button>
                    <button id="ohne" className="btn btn-2 btn-2a" onClick={() => this.handleCable('O')}> Ohne Kabelrücken </button>
                </div>
                </Modal>
            </>
        )
    }

}

export default Kabel;