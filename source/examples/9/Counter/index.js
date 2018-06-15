// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { log } from 'helpers';
import * as counterActions from '../../../core/actions/counter';

const mapStateToProps = (state) => {
    log('MSTP is called: Counter', '00ff11');

    return { counter: state.counter };
};

@connect(
    mapStateToProps,
    counterActions,
)
export default class Counter extends Component {
    _fakeIncrement = () => this.props.fakeIncrement();
    _increment = () => this.props.increment();
    _decrement = () => this.props.decrement();

    render () {
        log('render method is called: Counter', '00ff11');

        return (
            <section>
                <h1>Counter</h1>
                <h3>Count: {this.props.counter}</h3>
                <button onClick = { this._fakeIncrement }>Fake increment</button>
                <button onClick = { this._increment }>Increment</button>
                <button onClick = { this._decrement }>Decrement</button>
            </section>
        );
    }
}
