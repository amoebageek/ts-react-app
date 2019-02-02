import * as React from "react";

export interface InputComponentPropsInterface {
    value: string;
    inputActionCallBack(e: React.SyntheticEvent): void;
}
const InputComponent: React.SFC<InputComponentPropsInterface> = ({
    value,
    inputActionCallBack
}) => {
    return <input type="text" value={value} onChange={inputActionCallBack} />;
};

export default InputComponent;
