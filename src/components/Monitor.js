import React from 'react';
import Modal from 'react-responsive-modal';
import monitor_video from '../assets/monitor_video.mp4';
import {ModalImagesPath} from "./ImageHandler";

class Monitor extends React.Component {

    state = {
        open: false,
    };

    onOpenModal = () => {
    this.setState({ open: true });
    };

    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleMonitorSystem = (system) => {
        this.setState({open: false});
        if (system === 'OHNE') {
            // URGENT FIX: This is an anti-pattern!
            // a React application has a single state
            // the DOM is our ouztput and not a parallel means of storage
            // document.getElementById('kabel').disabled = true;
            // this.props.monitorSystemWithout();
        } else if (system === 'STATIV') {
            // document.getElementById('kabel').disabled = true;
            // this.props.monitorSystemStativ();
        } else if (system === 'RELING: OHNE HV') {
            // document.getElementById('kabel').disabled = false;
            // this.props.monitorSystemReling();
        } else {
            // document.getElementById('kabel').disabled = false;
            // this.props.monitorSystemRelingHV();
        }
    };

    handleMonitorImageDisplay = (count) => {
        if (count === 3) {
            this.props.monitorThree();
        } else if (count === 4) {
            this.props.monitorFour();
        } else {
            this.props.monitorFive();
        }
    };

    handleMonitorImageRow = (row) => {
        if (row === 1) {
            this.props.monitorOneRow();
        } else if (row === 2) {
            this.props.monitorTwoRow();
        }
    };

    renderMonitorButton(count) {

        var disabled = false;

        if (this.props.table === 'S') {
            if (count > 3) {
                disabled = true;
            }
        } if (this.props.table === 'M') {
            if (count > 4) {
                disabled = true;
            }
        }
        return (
            <button
                className="btn btn-2 btn-2a"
                onClick={() => this.handleMonitorImageDisplay(count)}
                disabled={disabled}
            > {count} Monitore </button>
        );
    }

    loadMonitor = (images) => {
        switch (images) {
            case 1:
                return ModalImagesPath.four_monitor;
            // case 2:
            default:
                return ModalImagesPath.eight_monitor;
        }
    };

    render() {

        return (
        <>
        <button
            className={ 'navBtn ' + (this.props.chosen && 'done')}
            onClick={this.onOpenModal}>3. Monitortragsystem</button>
        <div
            className={ 'divider ' + (this.props.chosen && 'done')}
        ></div>

        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <h2> Monitortragsystem </h2>
         <video autoPlay={false} height="300" width="500" controls playsInline={false}>
         <source src={monitor_video} type="video/mp4"/>
         </video>
        <h2> Anzahl der Monitore </h2>
        <div>
            {this.renderMonitorButton(3)}
            {this.renderMonitorButton(4)}
            {this.renderMonitorButton(5)}
        </div>
        <div>
        <h2> 1-reihig oder 2-reihig? </h2>
        {this.loadMonitor(1)}
        <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorImageRow(1)}> 1 - Reihig </button>
        </div>
        <div>
        {this.loadMonitor(2)}
        <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorImageRow(2)}> 2 - Reihig </button>
        </div>
        <h2>Monitorsystem</h2>
        <div>
        <button id="ohne" className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('OHNE')}>1. OHNE </button>
        <button id="stativ" className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('STATIV')}> 2. STATIVSYSTEM </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('RELING: OHNE HV')}>3. RELING: OHNE HV </button>
        <button className="btn btn-2 btn-2a" onClick={() => this.handleMonitorSystem('RELING: MIT HV')}> 4. RELING: MIT HV </button>
        </div>
        </Modal>
        </>
        )
    }
}

export default Monitor;
