import React from 'react';

import Steps from 'src/components/Steps';

// demo start

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 2,
            current1: 2,
            current2: 2
        };
    }
    render() {
        const { current, current1, current2 } = this.state;

        return (
            <div>
                <div className="demo-wrap">
                    <Steps
                        current={current}
                        onChange={current => {
                            this.setState({ current: current });
                        }}
                        steps={new Array(5).fill(null).map((v, i) => ({ title: 'content', remark: 'This is remark' }))}
                    />
                </div>
                <div className="demo-wrap">
                    <Steps
                        direction="vertical"
                        current={current1}
                        onChange={current => {
                            this.setState({ current1: current });
                        }}
                        steps={new Array(5).fill(null).map((v, i) => ({ title: 'content', remark: 'This is remark' }))}
                    />
                </div>
                <div className="demo-wrap">
                    <Steps
                        direction="vertical"
                        current={current2}
                        onChange={current => {
                            this.setState({ current2: current });
                        }}
                        steps={new Array(5).fill(null).map((v, i) => ({
                            title: 'content is disabled',
                            disabled: i > 2,
                            remark: 'This is remark'
                        }))}
                    />
                </div>
            </div>
        );
    }
}
// demo end

export default Demo;
