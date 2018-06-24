import React, { Component, PureComponent } from 'react';

import pureRender from "pure-render-decorator"

// @pureRender
class Person extends Component {
    componentWillReceiveProps(newProps) {
        console.log(
            `我新的props的name是${newProps.name}，age是${
                newProps.age
            }。我以前的props的name是${this.props.name}，age是${
                this.props.age
            }是我要re-render了`
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps: ')
        console.log(nextProps.name, nextProps.age)
        console.log('thisProps: ')
        console.log(this.props.name, this.props.age)
        // if (nextProps.name === this.props.name && nextProps.age === this.props.age) {
        //     console.log('the result are the same!!!')
        //     console.log('shouldComponentUpdate -> false')
        //     return false
        // }
        // console.log('NOT same!!!')
        // console.log('shouldComponentUpdate -> true')
        return nextProps.name !== this.props.name && nextProps.age !== this.props.age
    }
    render() {
        console.log('Person -> render')
        const { name, age } = this.props

        return (
            <div>
                <span>姓名:</span>
                <span>{name}</span>
                <span> age:</span>
                <span>{age}</span>
            </div>
        )
    }
}

export default Person