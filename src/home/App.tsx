import * as React from "react";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import RootComponents from "./components/RootComponents";
import {clickHandler, onInputChange} from "./duck/action";
import {appState, appActions} from "../app/duck/types";
/**
 * Interface sample structure to define types of your app container
 */

interface AppContainerPropsInterface {
    actions: appActions;
    count: number;
    inputValue: string;
}
interface AppContainerStateInterface extends AppContainerPropsInterface {}

class App extends React.Component<
    AppContainerPropsInterface,
    AppContainerStateInterface
> {
    constructor(props: AppContainerPropsInterface) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <RootComponents
                    label={"Click"}
                    buttonActionCallBack={this.props.actions.clickHandler}
                    value={this.props.count}
                    inputActionCallBack={this.props.actions.onInputChange}
                    inputValue={this.props.inputValue}
                />
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    // make this more generic
    return {
        actions: {
            clickHandler: bindActionCreators(clickHandler as any, dispatch),
            onInputChange: bindActionCreators(onInputChange as any, dispatch)
        }
    };
};
const mapStateToProps = (state: appState) => {
    return {
        home: state.homeReducer.home,
        count: state.homeReducer.count,
        inputValue: state.homeReducer.inputValue
    };
};
const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
export default Home;
