import React, { Component } from 'react';

class Comp1 extends Component {

    props = {
        item: { size: 8 }
    };
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h1>hi {props.item.size}</h1>
        );
    }
}

export default Comp1;
