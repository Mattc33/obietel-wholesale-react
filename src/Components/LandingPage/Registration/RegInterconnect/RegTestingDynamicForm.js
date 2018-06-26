import React, { Component } from 'react';
import styles from './RegTestingDynamicForm.css';
import { Form, Input, Icon, Button } from 'antd';

const FormItem = Form.Item;

let uuid = 0;
class RegTestingDynamicForm extends Component {

    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 0) {
            return;
        }
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    render() {

        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');


        const formItems = keys.slice(0,9).map((k, index) => {
            return (
                <FormItem
                    required={true}
                    key={k} 
                >
                    {
                        getFieldDecorator(`names[${k}]`, 
                            {
                                validateTrigger: ['onChange', 'onBlur'],
                                rules: [{
                                    required: true,
                                    whitespace: true,
                                    message: "Please input test number or delete this field.",
                                }],
                            }
                        )(
                                <Input placeholder={`Enter test number ${index+2}`} style={{ width: '90%' }} />
                        )
                    }
                    {
                        keys.length > 0 ? ( 
                                <Icon
                                    className={styles.dynamicDeleteButton}
                                    style={{ width: '9%' }}
                                    type="minus-circle-o"
                                    disabled={keys.length === 0}
                                    onClick={() => this.remove(k)}
                                />
                        ) : null
                    }
                </FormItem>
            );
        });

        const displayAddButton = () => {
            let renderDynamicFormButton = null;
            if ( keys.length <= 8 ) {
                renderDynamicFormButton = (<span><Icon type="plus" /> Add test number</span>)
            } else {
                renderDynamicFormButton = (<span><Icon type="warning" /> Limit Reached</span>)
            }
            return renderDynamicFormButton;
        }
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem style={{ width: '90%' }}>
                    <Input placeholder="Enter Test Number" />
                </FormItem>
                {formItems}
                <FormItem>
                    <Button type="dashed" onClick={this.add} style={{ width: '90%'}}>

                    {displayAddButton()}

                    </Button>
                </FormItem>
            </Form>
        );

    }

}

export default Form.create()(RegTestingDynamicForm);
