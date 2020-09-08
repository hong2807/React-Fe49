import React, { Component } from 'react'
import Child from './Child'

export default class Styling extends Component {
    render() {
        return (
            <div>
                 {/* h1 thừa hưởng css của Child vì Child import Styling.scss*/}
                 <h1 className="title">Hello</h1>
                {/* h1 ko thừa hưởng css của Child vì Child import Styling.module.scss*/}
                <h1 className="title2">Hello</h1>
                <Child/>
            </div>
        )
    }
}
