import * as React from "react";
import ButtonComponent from "./Button";
import InputComponent from "./Input";

export interface RootComponentPropsInterface {
    label: string;
    buttonActionCallBack(): void;
    value: number;
    inputActionCallBack(value: string): void;
    inputValue: string;
    // onInputChange(e: string): void;
}
class RootComponent extends React.Component<RootComponentPropsInterface> {
    constructor(props: RootComponentPropsInterface) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <ButtonComponent
                        label={this.props.label}
                        buttonActionCallBack={this.props.buttonActionCallBack}
                    />
                    <span>Button Click:count = {this.props.value}</span>
                </div>
                <div>
                    <InputComponent
                        value={this.props.inputValue}
                        inputActionCallBack={this.onInputChange}
                    />
                    <label>Input Value : {this.props.inputValue}</label>
                </div>
            </React.Fragment>
        );
    }
    onInputChange = (e: React.SyntheticEvent): void => {
        let target = e.target as HTMLInputElement;
        this.props.inputActionCallBack(target.value);
    };
}
export default RootComponent;
