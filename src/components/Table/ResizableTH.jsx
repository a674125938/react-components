import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Resizable } from 'react-resizable';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import withProps from 'src/utils/withProps';

// eslint-disable-next-line no-unused-vars
const FilteredResizable = ({ resizing, theme, ...rest }) => <Resizable {...rest} />;
FilteredResizable.propTypes = { resizing: PropTypes.bool, theme: PropTypes.any };

const ResizableTHWrap = withProps()(
    styled(FilteredResizable)(props => {
        const {
            resizing,
            theme: { designTokens: DT }
        } = props;

        return css`
            position: relative;
            box-sizing: border-box;

            .react-resizable-handle {
                position: absolute;
                width: 13px;
                height: 100%;
                bottom: 0;
                right: 0;
                cursor: col-resize;
                ::after {
                    content: ' ';
                    position: absolute;
                    left: 6px;
                    top: 14px;
                    bottom: 14px;
                    z-index: 1;
                    will-change: width, background;
                    transition: width 0.2s, background ease-in-out 0.2s;
                    display: block;
                    width: 1px;
                    background: ${DT.T_COLOR_LINE_DEFAULT_LIGHT};
                }
                :hover::after {
                    width: 2px;
                    background: ${DT.T_COLOR_LINE_DEFAULT_DARK};
                }
            }

            ${resizing &&
            css`
                .react-resizable-handle.react-resizable-handle {
                    ::after {
                        width: 2px;
                        background: ${DT.T_COLOR_LINE_PRIMARY_HOVER};
                    }
                }
            `};
        `;
    })
);

let _uid = 0;

export default class ResizableTH extends Component {
    static propTypes = {
        /** 当前宽度 */
        width: PropTypes.number,
        /** 最小宽度 */
        minWidth: PropTypes.number,
        /** 最大宽度 */
        maxWidth: PropTypes.number,
        /** 是否可调整大小 */
        resizeAble: PropTypes.bool,
        /** 调整时的回调 */
        onResize: PropTypes.func,
        /** @ignore */
        children: PropTypes.node
    };
    uid = 'rc-resizable-th-' + _uid++;
    state = {};
    onResize = (e, { size }) => {
        const { onResize = () => {} } = this.props;
        onResize(size.width);
    };
    onResizeStart = () => {
        this.setState({ resizing: true });
    };
    onResizeStop = () => {
        this.setState({ resizing: false });
    };
    render() {
        // eslint-disable-next-line no-unused-vars
        const { width, resizeAble, onResize, minWidth = 20, maxWidth = Infinity, children, ...rest } = this.props;
        const { resizing } = this.state;

        return resizeAble ? (
            <ResizableTHWrap
                width={width}
                height={0}
                onResize={this.onResize}
                onResizeStart={this.onResizeStart}
                onResizeStop={this.onResizeStop}
                minConstraints={[minWidth, 0]}
                maxConstraints={[maxWidth, 0]}
                resizing={resizing}
            >
                <th {...rest} data-uid={this.uid}>
                    <Fragment>{children}</Fragment>
                </th>
            </ResizableTHWrap>
        ) : (
            <th {...rest}>{children}</th>
        );
    }
}
