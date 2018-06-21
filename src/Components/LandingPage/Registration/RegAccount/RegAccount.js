import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Tooltip, Checkbox } from 'antd';
import EmptyInput from '../../../Shared/Forms/EmptyInput';
import InputTextFormItem from '../../../Shared/Forms/InputTextFormItem';

import SelectCountry from './SelectCountry';

class RegAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // * Primary Account
                firstName: '',
                lastName: '',
                phoneNumber: '',
                jobPosition: '',
            // * Company
                companyName: '',
                companyAddress: '',
                companyCity: '',
                companyZipcode: '',
                companyCountry: '',
            // * User
                email: '',
                password: '',
                confirmPassword: ''
        }
    }

    emitEmptyHandler = (e) => {
        this.setState({ [e.target.id]: '' });
    }

    onChangeInputHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = () => {
        alert('form is submitted');
    }

    changeCheckboxHandler = () => {

    }

    render() {

        const iconColor = {'color': '#ccc'};

        const firstNameSuffix = this.state.firstName ? <EmptyInput id="firstName" click={this.emitEmptyHandler}/> : null;
        const lastNameSuffix = this.state.lastName ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="lastName" /> : null;
        const phoneNumberSuffix = this.state.phoneNumber ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="phoneNumber" /> : null;
        const jobPositionSuffix = this.state.jobPosition ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="jobPosition" /> : null;

        const companyNameSuffix = this.state.companyName ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="companyName" /> : null;
        const companyAddressSuffix = this.state.companyAddress ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="companyAddress" /> : null;
        const companyCitySuffix = this.state.companyCity ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="companyCity" /> : null;
        const companyZipcodeSuffix = this.state.companyZipcode ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="companyZipcode" /> : null;

        const emailSuffix = this.state.email ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="email" /> : null;
        const passwordSuffix = this.state.password ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="password" /> : null;
        const confirmPasswordSuffix = this.state.confirmPassword ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="confirmPassword" /> : null;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={10}><h1>Account</h1></Col>
                    <Col span={4} />
                    <Col span={10}><h1>Company</h1></Col>
                </Row>
                <Row>
                    <InputTextFormItem
                        text='* First Name:' span={5} placeholder='Enter First Name' 
                        suffix={firstNameSuffix} value={this.state.firstName} id="firstName"
                        onChange={ this.onChangeInputHandler }
                    />
                    <Col span={1}></Col>
                    <InputTextFormItem
                        text='* Last Name:' span={4} placeholder='Enter Last Name' 
                        suffix={lastNameSuffix} value={this.state.lastName} id="lastName"
                        onChange={ this.onChangeInputHandler }
                    />
                    <Col span={4}></Col>
                    <InputTextFormItem
                        text='* Company Name:' span={10} placeholder="Enter Company's Name"
                        suffix={companyNameSuffix} value={this.state.companyName} id="companyName"
                        onChange={ this.onChangeInputHandler }
                    />
                </Row>

                <Row style={{'marginTop': '20px'}}>
                    <InputTextFormItem
                        text='* Telephone Number:' span={10} placeholder="Enter Your Telephone Number"
                        prefix={<i className="fas fa-phone" style={iconColor}></i>} suffix={phoneNumberSuffix} value={this.state.phoneNumber} 
                        id="phoneNumber" onChange={ this.onChangeInputHandler }
                    />
                    <Col span={4} />
                    <InputTextFormItem
                    />
                    {/* <Col span={10}>
                        <span>* Address:</span>
                        <Input
                            placeholder="Enter Your Company's Address"
                            prefix={<i className="fas fa-thumbtack" style={iconColor}></i>}
                            suffix={companyAddressSuffix}
                            value={this.state.companyAddress}
                            id="companyAddress"
                            onChange={ this.onChangeInputHandler }
                        />
                    </Col> */}
                </Row>

                <Row style={{'marginTop': '20px'}}>
                    <Col span={10}>
                        <span>* Job Position:</span>
                        <Input
                            placeholder="Enter Current Job Position"
                            prefix={<i className="fas fa-user-md" style={iconColor}></i>}
                            suffix={jobPositionSuffix}
                            value={this.state.jobPosition}
                            id="jobPosition"
                            onChange={ this.onChangeInputHandler }
                        />
                    </Col>
                    <Col span={4} />
                    <Col span={5}>
                        <span>* City:</span>
                        <Input
                            placeholder="Enter City"
                            prefix={<i className="fas fa-map-marker-alt" style={iconColor}></i>}
                            suffix={companyCitySuffix}
                            value={this.state.companyCity}
                            id="companyCity"
                            onChange={ this.onChangeInputHandler }
                        />
                    </Col>
                    <Col span={1}>
                    </Col>
                    <Col span={4}>
                        <span>* Zipcode:</span>
                        <Input
                            placeholder="Enter The Zipcode"
                            prefix={<i className="fas fa-map-signs" style={iconColor}></i>}
                            suffix={companyZipcodeSuffix}
                            value={this.state.companyZipcode}
                            id="companyZipcode"
                            onChange={ this.onChangeInputHandler }
                        />
                    </Col>
                </Row>

                <Row style={{'marginTop': '20px'}}>
                    <Col span={14} />
                    <Col span={7}>
                        <span>* Country:</span>
                        <SelectCountry />
                    </Col>
                </Row>

                <Row style={{'marginTop': '20px'}}>
                    <Col span={10}>
                        <h1>Create User</h1>
                    </Col>
                </Row>

                <Row style={{'marginTop': '10px'}}>
                    <Col span={10}>
                    <span>* Email:</span>
                        <Input
                            placeholder="Enter Email Address"
                            prefix={<i className="fas fa-user" style={iconColor}></i>}
                            suffix={emailSuffix}
                            value={this.state.email}
                            id="email"
                            onChange={ this.onChangeInputHandler }
                        />
                    </Col>
                </Row>

                <Row style={{'marginTop': '20px'}}>
                    <Col span={10}>
                    <span>* Password:</span>
                        <Input
                            type="password"
                            placeholder="Enter Your Password"
                            prefix={<i className="fas fa-key" style={iconColor}></i>}
                            suffix={passwordSuffix}
                            value={this.state.password}
                            id="password"
                            onChange={ this.onChangeInputHandler }
                        />
                    </Col>
                </Row>

                <Row style={{'marginTop': '20px'}}>
                    <Col span={10}>
                    <span>* Confirm Password:</span>
                        <Input
                            type="password"
                            placeholder="Confirm Your Password"
                            prefix={<i className="fas fa-key" style={iconColor}></i>}
                            suffix={confirmPasswordSuffix}
                            value={this.state.confirmPassword}
                            id="confirmPassword"
                            onChange={ this.onChangeInputHandler }
                        />
                    </Col>
                </Row>

                <Row style={{'marginTop': '40px'}}>
                    <Checkbox onChange={ this.changeCheckboxHandler.bind(this, 'terms') } />
                        <span>I understand and agree with the <a>Terms of Service</a> and <a>Privacy Policy</a></span>
                    <div><Checkbox /><span>Not a Robot</span></div>
                </Row>

            </Form>
        )
    }
}

export default RegAccount;
