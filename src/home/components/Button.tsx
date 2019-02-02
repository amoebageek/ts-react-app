import * as React from "react";

export interface ButtonComponentPropsInterface {
    label: string;
    buttonActionCallBack(): void;
}
const ButtonComponent: React.SFC<ButtonComponentPropsInterface> = ({
    label,
    buttonActionCallBack
}) => {
    return <button onClick={e => buttonActionCallBack()}>{label}</button>;
};

export default ButtonComponent;
