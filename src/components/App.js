import React from 'react';
import Header from './Header';

class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests',
        data: ''
    };
    componentDidMount() {
        fetch('https://swapi.co/api/people/1')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    data: myJson
                });
            });
    };
    componentWillUnmount() {
        console.log('Component will unmount');
    };
    render() {
        return (
            <div>
                <Header message={ this.state.pageHeader } />
                <div>
                    { this.state.data === '' ? '' : this.state.data.name }
                </div>
            </div>
        );
    };
};

export default App;
