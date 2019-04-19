import React, { Component } from 'react';

class Row extends Component {

    render() {
        return (
            <div className="Row">

                <div>
                    <button type="button" className="btn btn-outline-primary">1</button> 
                    <button type="button" className="btn btn-outline-primary">2</button> 
                    <button type="button" className="btn btn-outline-primary">3</button> 
                </div>

            </div>

        );
    }

}


export default Row;