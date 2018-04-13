import React from 'react';
import ReactDOM from 'react-dom';
import Form from './page';
import './css/index.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <Form/>
            </div>
        )
    }
}

var root = document.getElementById('root');
ReactDOM.render(
    <App/>,
    root
  );