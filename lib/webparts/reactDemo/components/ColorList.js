var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { List } from 'office-ui-fabric-react/lib/List';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
var ColorList = /** @class */ (function (_super) {
    __extends(ColorList, _super);
    function ColorList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onRenderListCell = function (color, index) {
            return (React.createElement("div", null,
                color.title,
                React.createElement("br", null),
                React.createElement(DefaultButton, { text: "delete", data: color.id, onClick: function () { return _this._onButtonClick(color); } })));
        };
        return _this;
    }
    ColorList.prototype.render = function () {
        return (React.createElement(List, { items: this.props.colors, onRenderCell: this._onRenderListCell }));
    };
    ColorList.prototype._onButtonClick = function (color) {
        this.props.onRemoveColor(color);
    };
    return ColorList;
}(React.Component));
export { ColorList };
//# sourceMappingURL=ColorList.js.map