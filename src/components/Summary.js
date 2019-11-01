import React from 'react';



class Summary extends React.Component {


    render() {
        return (
            <div>
            <h3> Mein Tisch </h3>
            <br />
            <h6> Tischgröße </h6>
            <h5>  - {this.props.chosenTable} </h5>
            <h6> Monitor Einstellung</h6>
            <h5>  - {this.props.chosenMonitorRow}</h5>
            <h5>  - {this.props.chosenMonitorSystem} </h5>
            {/*<h5> - {this.props.chosenMonitorCount} Monitore</h5>*/}
            <h6> Höhenverstellbar </h6>
            <h5>  - {this.props.chosenHeight} </h5>
            <h6> Gewünschte Blendeneinstellung </h6>
            <h5>  - {this.props.chosenBlende} </h5>
            {/*<h5> - {this.props.chosenKabel} </h5>*/}
            <h6> Gewünschte Technik </h6>
            <h5>  - {this.props.chosenTechnikSide} </h5>
            <h5> - {this.props.chosenTechnikContainer} </h5>
            </div>
        );
    }


}

export default Summary;