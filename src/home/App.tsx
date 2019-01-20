import * as React from "react";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {firstAction} from "./duck/action";
import {appState, appActions} from "../app/duck/types";
/**
 * Interface sample structure to define types of your app container
 */

interface AppContainerPropsInterface {
    actions: appActions;
}
interface AppContainerStateInterface extends AppContainerPropsInterface {}

class App extends React.Component<
    AppContainerPropsInterface,
    AppContainerStateInterface
> {
    constructor(props: AppContainerPropsInterface) {
        super(props);
        this.props.actions.firstAction("1");
    }
    componentWillMount() {
        console.log(this.props.actions.firstAction("2"));
    }

    render() {
        return (
            <React.Fragment>
                <h3>Container</h3>
                <button>Click</button>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    // make this more generic
    return {
        actions: {
            firstAction: bindActionCreators(firstAction as any, dispatch)
        }
    };
};
const mapStateToProps = (state: appState) => {
    return {
        home: state.home
    };
};
const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
export default Home;
