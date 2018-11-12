// Core
import React, { Component } from 'react';

// Instruments
import { selectItems } from './selectors';

// Components
import { List } from './List';

export class App extends Component {
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

    render() {
        const { counter1, counter2, counter3 } = this.state;

        console.time('→ selector');
        const items = selectItems(this.state);
        console.timeEnd('→ selector');

        return (
            <section className = 'example'>
                <h1>
                    Items array length: <code>{items.length}</code>
                </h1>
                <h3>
                    Counter 1: <code>{counter1}</code>
                </h3>
                <h3>
                    Counter 2: <code>{counter2}</code>
                </h3>
                <h3>
                    Counter 3: <code>{counter3}</code>
                </h3>
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
