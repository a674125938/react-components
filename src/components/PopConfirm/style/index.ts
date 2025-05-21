import styled from '@emotion/styled';
import { css } from '@emotion/core';

import config from 'src/config';
import { sWrap } from 'src/style';

const { prefixCls: _prefixCls } = config;
export const prefixCls = _prefixCls + '-popconfirm';

export const PopupWrap =sWrap<{ hideIcon?: boolean }>({})(
    styled('div')((props) => {
        const {
            hideIcon
        } = props;
        return css` 
            min-width: 186px;
            max-width: 300px;
            box-sizing: border-box;
            padding: 12px 16px 12px ${hideIcon ? '20px': '40px'};
        `
    })
);

export const ContentWrap = sWrap({})(
    styled('div')(props => {
        const {
            theme: { designTokens: DT }
        } = props;

        return css`
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            max-height: 72px;
            overflow: auto;
            word-break: normal;
            color: ${DT.T_COLOR_TEXT_DEFAULT_DARK};
        `;
    })
);
export const FooterWrap = styled('div')`
    text-align: right;
    margin-top: 12px;
`;

export const IconWrap = sWrap({})(
    styled('div')(props => {
        const {
            theme: { designTokens: DT }
        } = props;

        return css`
            position: absolute;
            left: 12px;
            top: 14px;
            color: ${DT.T_COLOR_TEXT_WARNING};
            fill: ${DT.T_COLOR_TEXT_WARNING};
        `;
    })
);
