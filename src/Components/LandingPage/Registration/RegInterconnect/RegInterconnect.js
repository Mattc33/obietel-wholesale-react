import React, { Component } from 'react';
import { Row, Col, Form, Icon, Tooltip, Select, Input } from 'antd';

import RegTestingDynamicForm from './RegTestingDynamicForm';
import SelectCodecs from './SelectCodecs';

const Option = Select.Option;
const FormItem = Form.Item;

class RegInterconnect extends Component {

    state = {
        // * Interconnection Profile
            ipAddress: '',
            port: '',
            codecs: [],
        // * NOC Contact
            nocEmail: '',
            nocSkype: '',
        // * Testing
            interconnectionTesting: []
    }

    componentDidMount() {
        this.props.setClick(this.handleSubmit)
    }

    emitEmptyHandler = (e) => {
        this.setState({ [e.target.id]: '' });
    }

    onChangeInputHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    codecsChangeHandler = (value) => {
        this.setState({codecs: value});
        console.log(value);
    }

    /* const interconnectionTesting = (
        
    )
    */


    render() {
        const ipAddressSuffix = this.state.ipAddress ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="ipAddress" /> : null;
        const portSuffix = this.state.port ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="port" /> : null;
        const nocEmailSuffix = this.state.nocEmail ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="nocEmail" /> : null;
        const nocSkypeSuffix = this.state.nocSkype ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="nocSkype" /> : null;

        const { getFieldDecorator } = this.props.form;

        const ipAddressInput = (
            <FormItem label='IP Address:'>
            {
                getFieldDecorator('ipAddress', 
                    {rules: [{required: true, message: "Please input ip address.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter IP Address'
                            suffix={ipAddressSuffix}
                            value={this.state.ipAddress}
                            id='ipAddress'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const portInput = (
            <FormItem label='Port:' style={{marginTop: '-15px'}}>
            {
                getFieldDecorator('port', 
                    {rules: [{required: true, message: "Please input port.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Port'
                            suffix={portSuffix}
                            value={this.state.port}
                            id='port'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const nocEmail = (
            <FormItem label='NOC Email:'>
            {
                getFieldDecorator('nocEmail', 
                    {rules: [{required: true, message: "Please input noc email.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter NOC Email'
                            suffix={nocEmailSuffix}
                            value={this.state.nocEmail}
                            id='nocEmail'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const nocSkype = (
            <FormItem label='NOC Skype:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('nocSkype', 
                    {rules: [{required: true, message: "Please input noc skype.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter NOC Skype'
                            suffix={nocSkypeSuffix}
                            value={this.state.nocSkype}
                            id='nocSkype'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={10}>
                        <Row><h1>Interconnection Profile</h1></Row>
                        <Row>
                            <Col span={24}>
                                {ipAddressInput}
                            </Col>

                            <Col span={24}>
                                {portInput}
                            </Col>

                            <Col span={24}>
                                <FormItem label='Codecs:' style={{marginTop: '-10px'}}>
                                    {
                                        getFieldDecorator('codecs', 
                                        {rules: [{required: true, message: 'Please select one or more codecs'}]}
                                    ) (
                                        <SelectCodecs />
                                    )
                                    }
                                </FormItem>
                            </Col>
                        </Row>

                        <Row>
                            <h1>NOC Contact</h1>
                        </Row>
                        <Row>
                            <Col span={24}>
                                {nocEmail}
                            </Col>
                            <Col span={24}>
                                {nocSkype}
                            </Col>
                        </Row>
                    </Col>

                    <Col span={4} />

                    <Col span={10}>
                        <Row span={24}>
                            <h1>Testing 
                                <Tooltip title="For example: 12345678901">
                                    <Icon type="question-circle-o" style={{'paddingLeft': '5px', 'fontSize': '16px'}} />
                                </Tooltip>
                            </h1>
                        </Row>
                        <RegTestingDynamicForm />
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Form.create()(RegInterconnect);
