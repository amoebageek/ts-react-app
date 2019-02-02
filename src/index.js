import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./app/store";
import App from "./home/App";

class Application extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(<Application />, document.getElementById("root"));
