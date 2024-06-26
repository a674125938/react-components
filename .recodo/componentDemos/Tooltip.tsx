// @ts-nocheck
import { Button, Form, Radio, Switch, Tooltip } from '@ucloud-fe/react-components';
import React from 'react';

// demo start
const { Placement, Theme } = Tooltip;
const Popup = () => <div>This is a popup, dadada</div>;
const Content = props => <Button {...props} />;

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placement: 'top',
            theme: 'light',
            arrow: true
        };
    }
    render() {
        const { placement, theme, arrow } = this.state;
        const itemLayout = {
            labelCol: {
                span: 3
            },
            controllerCol: {
                span: 9
            }
        };
        return (
            <div>
                <Form className="demo-form">
                    <Form.Item label="placement" {...itemLayout}>
                        <Radio.Group
                            value={placement}
                            onChange={placement => this.setState({ placement })}
                            options={Placement.map(placement => ({
                                value: placement
                            }))}
                        />
                    </Form.Item>
                    <Form.Item label="theme" {...itemLayout}>
                        <Radio.Group
                            value={theme}
                            onChange={theme => this.setState({ theme })}
                            options={Theme.map(theme => ({
                                value: theme
                            }))}
                        />
                    </Form.Item>
                    <Form.Item label="arrow" {...itemLayout}>
                        <Switch onChange={arrow => this.setState({ arrow })} checked={arrow} />
                    </Form.Item>
                </Form>
                <div className="demo-wrap">
                    <Tooltip
                        placement={placement}
                        popup={<Popup />}
                        theme={theme}
                        arrow={arrow}
                        getPopupContainer={() => document.body}
                    >
                        <Content>content</Content>
                    </Tooltip>
                </div>
            </div>
        );
    }
}
// demo end

export default Demo;
