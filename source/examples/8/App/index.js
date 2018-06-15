// Core
import React, { Component } from 'react';

// Instruments
import { selectItems, selectItemsMemoized } from '../selectors';

// Components
import List from '../List';

export default class App extends Component {
    state = {
        counter1: 100,
        counter2: 100,
        counter3: 0,
    };

    handleIncrement1 = () => {
        this.setState(({ counter1 }) => ({
            counter1: counter1 + 1,
        }));
    };

    handleIncrement2 = () => {
        this.setState(({ counter2 }) => ({
            counter2: counter2 + 1,
        }));
    };

    handleIncrement3 = () => {
        this.setState(({ counter3 }) => ({
            counter3: counter3 + 1,
        }));
    };

    render () {
        const { counter1, counter2, counter3 } = this.state;

        // console.time('• selectItems selector •');
        // const items = selectItems(this.state);
        // console.timeEnd('• selectItems selector •');

        console.time('• selectItemsMemoized selector •');
        const items = selectItemsMemoized(this.state);
        console.timeEnd('• selectItemsMemoized selector •');

        return (
            <section>
                <h1>
                    Items array length (counter1 * counter2): {items.length}
                </h1>
                <h2>Counter 1: {counter1} </h2>
                <h2>Counter 2: {counter2} </h2>
                <h2>Counter 3: {counter3} </h2>
                <button onClick = { this.handleIncrement1 }>
                    Increment Counter 1
                </button>
                <button onClick = { this.handleIncrement2 }>
                    Increment Counter 2
                </button>
                <button onClick = { this.handleIncrement3 }>
                    Increment Counter 3
                </button>
                <List items = { items } />
            </section>
        );
    }
}
