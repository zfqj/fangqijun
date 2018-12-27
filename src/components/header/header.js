import React from 'react';
import classNames from 'classnames';
import './header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mystate: null
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={classNames('header')}>

            </div>
        );
    }
}

export default Header;