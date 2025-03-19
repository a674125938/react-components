import React from 'react';
import _ from 'lodash';
import PopConfirm from 'src/components/PopConfirm';
import Button from 'src/components/Button';
import Combine from 'src/components/Combine';
import ZForm from 'src/components/ZForm';
import Form from 'src/components/Form';
import Input from 'src/components/Input';

// demo start
const { formDecorator, controllerDecorator, formShape } = ZForm;
const { Item } = Form;
const ZInput = controllerDecorator({
    initialValue: ''
})(Input);
var itemLayout = {
    labelCol: {
        span: 3
    },
    controllerCol: {
        span: 9
    }
};
const DemoConfirm = ({ form }) => {
    const getError = (error, key) => {
        return _.get(error, key);
    };

    const [error1, setError1] = React.useState();

    return (
        <div>
            <PopConfirm
                openConfirmCheck
                popupStyle={{
                    maxWidth: '500px'
                }}
                contentWrapStyle={{
                    maxHeight: '120px',
                    overflow: 'hidden'
                }}
                popup={
                    <ZForm form={form} itemProps={{ ...itemLayout, shareStatus: true }}>
                        <Item label="test" {...(error1 ? { status: 'error', tip: error1 } : {})}>
                            <ZInput
                                zName="input_1"
                                zOptions={{
                                    rules: [
                                        {
                                            required: true
                                        }
                                    ]
                                }}
                            />
                        </Item>
                    </ZForm>
                }
                onConfirm={close => {
                    form.validateFields((error, value) => {
                        const err = getError(error, 'input_1');
                        if (err) {
                            setError1(err.errors.map(x => x.message).join(','));
                        } else {
                            setError1();
                            form.resetFields();
                            close();
                        }
                    });
                }}
                onCancel={() => console.log('onCancel')}
                hideIcon
            >
                <Button styleType="primary">一点文字</Button>
            </PopConfirm>
        </div>
    );
};
DemoConfirm.propTypes = {
    form: formShape
};
const Demo3WithForm = formDecorator()(DemoConfirm);

const Demo = () => {
    return (
        <div>
            <h2>组合 ZForm 表单</h2>
            <div className="demo-wrap">
                <Demo3WithForm />
            </div>
        </div>
    );
};
// demo end

export default Demo;
