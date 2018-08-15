// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { log } from 'helpers';
import { selectUsers, selectUsersMemoized } from '../selectors/users';

const mapStateToProps = (state) => {
    log('MSTP is called: Users', '38dddd');

    console.time('• selectUsers selector •');
    const users = selectUsers(state);
    console.timeEnd('• selectUsers selector •');

    // console.time('• selectUsersMemoized selector •');
    // const users = selectUsersMemoized(state);
    // console.timeEnd('• selectUsersMemoized selector •');

    return { users };
};

@connect(mapStateToProps)
export default class Users extends Component {
    render () {
        const { users } = this.props;

        log('render method is called: Users', '38dddd');

        const list = users.map(({ id, fullname }) => (
            <li key = { id }>{fullname}</li>
        ));

        return (
            <>
                <h1>Users</h1>
                <ul>{list}</ul>
            </>
        );
    }
}
