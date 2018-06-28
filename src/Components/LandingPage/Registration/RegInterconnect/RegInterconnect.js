import React, { Component } from 'react';
import { Row, Col, Form, Icon, Tooltip, Select } from 'antd';
import InputTextFormItem from '../../../Shared/Forms/InputTextFormItem';
import RegTestingDynamicForm from './RegTestingDynamicForm';

const Option = Select.Option;

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

    /* const ipAddressInput = (

    )
    */

    /* const port = (

    ) 
    */

    /* const codecs = (

    )
    */

    /* const nocEmail = (

    )
    */

    /* const nocSkype = (

    )
    */

    /* const interconnectionTesting = (
        
    )
    */


    render() {
        const ipAddressSuffix = this.state.ipAddress ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="ipAddress" /> : null;
        const portSuffix = this.state.port ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="port" /> : null;
        const nocEmailSuffix = this.state.nocEmail ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="nocEmail" /> : null;
        const nocSkypeSuffix = this.state.nocSkype ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="nocSkype" /> : null;


        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={10}>
                        <Row><h1>Interconnection Profile</h1></Row>
                        <Row>
                            <InputTextFormItem
                                text="* IP Address:" span={24} placeholder='Enter IP Address' 
                                suffix={ipAddressSuffix} value={this.state.ipAddress} id="ipAddress"
                                onChange={ this.onChangeInputHandler }
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}  
                                text="* Port:" span={24} placeholder='Enter Port' 
                                suffix={portSuffix} value={this.state.port} id="port"
                                onChange={ this.onChangeInputHandler }
                            />
                            <Col span={24} style={{'marginTop': '20px'}}>
                                <span>* Supported Codecs: </span>
                                <Select
                                    showSearch
                                    mode="multiple"
                                    placeholder="Select Codecs"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    onChange={this.codecsChangeHandler}
                                >
                                    <Option value="G711">G.711</Option>
                                    <Option value="G722">G.722</Option>
                                    <Option value="G723">G.723</Option>
                                    <Option value="G726">G.726</Option>
                                    <Option value="G728">G.728</Option>
                                    <Option value="G729">G.729</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row style={{marginTop: '40px'}}>
                            <h1>NOC Contact</h1>
                        </Row>
                        <Row>
                            <InputTextFormItem
                                prefix={<i className='fas fa-envelope' style={{color: '#ccc'}} />}
                                text="Email Address:" span={24} placeholder='Enter NOC Email' 
                                suffix={nocEmailSuffix} value={this.state.nocEmail} id="nocEmail"
                                onChange={ this.onChangeInputHandler }
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                prefix={<i className='fab fa-skype' style={{color: '#ccc'}} />}
                                text="Email Address:" span={24} placeholder='Enter NOC Skype' 
                                suffix={nocSkypeSuffix} value={this.state.nocSkype} id="nocSkype"
                                onChange={ this.onChangeInputHandler }
                            />
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
                        
                        {/* Dynamic Form */}
                        <RegTestingDynamicForm />

                    </Col>
                </Row>
            </Form>
        )
    }
}

export default RegInterconnect;