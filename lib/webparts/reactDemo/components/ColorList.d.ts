import * as React from 'react';
import { IColor } from '../IColor';
export declare type RemoveColorCallback = (color: IColor) => void;
export interface IColorListProps {
    colors: IColor[];
    onRemoveColor: RemoveColorCallback;
}
export declare class ColorList extends React.Component<IColorListProps, {}> {
    render(): React.ReactElement<IColorListProps>;
    private _onRenderListCell;
    private _onButtonClick;
}
//# sourceMappingURL=ColorList.d.ts.map