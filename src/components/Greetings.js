import React from 'react';

export default class Greetings extends React.Component {
    render() {
        const user=this.props.user;
        let greeting = '';

        if (user) {
            greeting=`Hello, ${user.title} ${user.name}`;
        } else {
            greeting = 'Hello World!'
        }

        return (
            <div>
                <h1>{greeting}</h1>
                {this.props.children}
            </div>
            )
    }
}