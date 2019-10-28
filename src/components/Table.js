import React from 'react';
import tisch_video from '../assets/tisch_video.mp4';
import Modal from "react-responsive-modal";

class Table extends React.PureComponent {

    state = {
        open: false,
    };

    onOpenModal = () =>  {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    handleTable = (size) => {
        this.setState({open: false});
        this.props.callback(size);
    };

    render() {

        return (
        <>
        <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal}>1. Tisch</button>
        <div
            className={ 'divider ' + (this.props.chosen && 'done')}
        ></div>

        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2>Wähle deine Tischgröße</h2>
        <video autoPlay={false} height="300" width="500" controls playsInline={false}>
        <source src={tisch_video} type="video/mp4"/>
        </video>
            <div>
                <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('S')}> KLEIN (bis zu 3 Monitore) </button>
            </div>

            <div>
                <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('M')}> MITTEL (bis zu 4 Monitore) </button>
            </div>
            
            <div>
                <button className="btn btn-2 btn-2a" onClick={() => this.handleTable('L')}> GROß (bis zu Monitore) </button>
            </div>
        </Modal>
        </>
        )
    }
}

export default Table;
