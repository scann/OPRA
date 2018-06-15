// Core
import React, { PureComponent } from 'react';

// Instruments
import { log } from 'helpers';

export default class List extends PureComponent {
    render () {
        const { items } = this.props;

        log('List component render', 'eef947');

        const list = items.map((item, index) => <li key = { index }>{item}</li>);

        return <ul>{list}</ul>;
    }
}
