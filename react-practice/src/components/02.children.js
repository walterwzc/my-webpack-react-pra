import React, { Component } from 'react'

class NodeList extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function(child) {
                        return <li>{child}</li>
                    })
                }
            </ol>
        );
    }
}

export default NodeList;