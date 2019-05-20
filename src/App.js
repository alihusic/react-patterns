import React, {Component} from 'react';
import 'normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AppRoute from "./AppRouter";

class App extends Component {

    render() {
        return (
            <AppRoute/>
        );
    }
}

export default App;
