import React, { Component } from 'react'

class OpacityChange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: 1
        }
    }
    componentDidMount() {
        let count = 0;
        this.opacityTimer = setInterval(function() {
            console.log(this.state.opacity)
            let opacity = this.state.opacity
            opacity -= 0.05
            if (opacity < 0) {
                opacity = 1
            }
            this.setState({
                opacity: opacity
            })
            count++
            if (count >= 30) {
                clearInterval(this.opacityTimer)
            }
            console.log(count)
        }.bind(this), 100)
    }
    render() {
        return (
            <div style={{ opacity: this.state.opacity, background: '#ff0' }}>
                the opacity is changing, message from father component:{' '}
                {this.props.message}
            </div>
        )
    }
}

export default OpacityChange
