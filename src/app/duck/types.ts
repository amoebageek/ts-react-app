export interface ReducerInterface {
    home: string;
    count: number;
    inputValue: string;
}
export interface appState {
    homeReducer: ReducerInterface;
}
export interface appActions {
    clickHandler(): void;
    onInputChange(payload?: string): void;
}
