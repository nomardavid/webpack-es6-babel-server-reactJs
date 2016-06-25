import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
    render() {
        return (
            <div>world</div>
        );
    }
} 

ReactDOM.render(<World/>, document.getElementById('world'));