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
import styles from './ReactDemo.module.scss';
import { SPHttpClient } from '@microsoft/sp-http';
import { ColorList } from './ColorList';
var ReactDemo = /** @class */ (function (_super) {
    __extends(ReactDemo, _super);
    // private _colors: IColor[] = [
    //   {id: 1, title: 'red'},
    //   {id: 2, title: 'blue'},
    //   {id: 3, title: 'green'}
    // ];
    function ReactDemo(props) {
        var _this = _super.call(this, props) || this;
        _this._removeColor = function (colorToRemove) {
            var newColors = _this.state.colors.filter(function (color) { return color != colorToRemove; });
            _this.setState({ colors: newColors });
        };
        _this.state = { colors: [] };
        return _this;
    }
    ReactDemo.prototype.getColorsFromList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var endpoint = _this.props.currentSiteUrl + "/_api/lists/getbytitle('Colors')/items?$select=Id,Title";
            _this.props.spHttpClient.get(endpoint, SPHttpClient.configurations.v1)
                .then(function (response) {
                return response.json();
            })
                .then(function (jsonResponse) {
                var spListItemColors = [];
                for (var index = 0; index < jsonResponse.value.length; index++) {
                    spListItemColors.push({
                        id: jsonResponse.value[index].Id,
                        title: jsonResponse.value[index].Title
                    });
                    resolve(spListItemColors);
                }
            });
        });
    };
    ReactDemo.prototype.componentDidMount = function () {
        var _this = this;
        this.getColorsFromList()
            .then(function (spListItemColors) {
            _this.setState({ colors: spListItemColors });
        });
    };
    ReactDemo.prototype.render = function () {
        return (React.createElement("div", { className: styles.reactDemo },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Welcome to SharePoint + React!"),
                        React.createElement(ColorList, { colors: this.state.colors, onRemoveColor: this._removeColor }))))));
    };
    return ReactDemo;
}(React.Component));
export default ReactDemo;
//# sourceMappingURL=ReactDemo.js.map