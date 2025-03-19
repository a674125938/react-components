import React, { useCallback, useMemo } from 'react';

import Tooltip from 'src/components/Tooltip';
import Button from 'src/components/Button';
import SvgIcon from 'src/components/SvgIcon';
import Combine from 'src/components/Combine';
import noop from 'src/utils/noop';
import useUncontrolled from 'src/hooks/useUncontrolled';
import useLocale from 'src/components/LocaleProvider/useLocale';

import { PopupWrap, ContentWrap, FooterWrap, IconWrap } from './style';
import LOCALE from './locale/zh_CN';

export interface PopConfirmProps {
    /** @ignore */
    locale?: typeof LOCALE;
    /** 确认按钮回调 ,openConfirmCheck开启的场景会将 visible 方法 传递出去 */
    onConfirm?: (fn?: (visible: boolean) => void) => void;
    /** 取消按钮回调 */
    onCancel?: () => void;
    /** 隐藏Icon */
    hideIcon?: boolean;
    /** 弹窗中icon的自定义 */
    icon ?: React.ReactNode;
    /** 开启确定按钮回调的验证，返回false不会主动关闭弹窗 */
    openConfirmCheck?: boolean;
    /** popup样式 */
    popupStyle?: React.CSSProperties;
    /** 内容区盒子样式 */
    contentWrapStyle?: React.CSSProperties;
}

const PopConfirm = (
    {
        locale: _locale,
        onConfirm: _onConfirm = noop,
        onCancel: _onCancel = noop,
        popup: _popup,
        defaultVisible = false,
        visible: _visible,
        onVisibleChange: _onVisibleChange,
        hideIcon: _hideIcon = false,
        icon:_Icon,
        openConfirmCheck:_openConfirmCheck = false,
        popupStyle:_popupStyle = {},
        contentWrapStyle:_contentWrapStyle = {},
        ...rest
    }: PopConfirmProps & any // TODO use popupProps
) => {
    const [visible, onVisibleChange] = useUncontrolled(_visible, defaultVisible, _onVisibleChange);
    const onConfirm = useCallback( () => {
        if(_openConfirmCheck){
            _onConfirm((visible = false) => onVisibleChange(visible))
            return
        }
        onVisibleChange(false);
        _onConfirm()
    }, [_onConfirm, onVisibleChange,_openConfirmCheck]);

    const onCancel = useCallback(() => {
        onVisibleChange(false);
        _onCancel();
    }, [_onCancel, onVisibleChange]);
    const locale = useLocale(LOCALE, 'PopConfirm', _locale);
    const popup = useMemo(() => {
        return (
            <PopupWrap hideIcon={_hideIcon} style={{..._popupStyle}}>
                {
                    !_hideIcon && <IconWrap>
                        {_Icon || <SvgIcon size="20px" type="exclamation-circle-filled" />}
                    </IconWrap>
                }
                <ContentWrap style={{..._contentWrapStyle}}>{_popup}</ContentWrap>
                <FooterWrap>
                    <Combine sharedProps={{ size: 'sm' }}>
                        <Button onClick={onCancel}>{locale.cancel}</Button>
                        <Button onClick={onConfirm} styleType="primary">
                            {locale.confirm}
                        </Button>
                    </Combine>
                </FooterWrap>
            </PopupWrap>
        );
    }, [_popup, locale.cancel, locale.confirm, onCancel, onConfirm]);
    return (
        <Tooltip
            trigger={['click']}
            popup={popup}
            customStyle={{ popupWrapperPadding: '0px' }}
            onVisibleChange={onVisibleChange}
            {...rest}
            visible={visible}
        />
    );
};

export default PopConfirm;
