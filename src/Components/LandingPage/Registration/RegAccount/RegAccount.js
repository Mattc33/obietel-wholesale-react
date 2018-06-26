import React, { Component } from 'react';
import { Row, Col, Form, Icon, Tooltip, Checkbox } from 'antd';
import InputTextFormItem from '../../../Shared/Forms/InputTextFormItem';

import SelectCountry from './SelectCountry';

class RegAccount extends Component {

    state = {
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
        console.log('form is submitted');
        console.log(this.state);
    }

    changeCheckboxHandler = () => {

    }

    render() {

        const firstNameSuffix = this.state.firstName ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="firstName" /> : null;
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
                    <Col span={10}>
                        <Row><h1>Account</h1></Row>
                        <Row>
                            <InputTextFormItem
                                text='* First Name:' span={12} placeholder='Enter First Name' 
                                suffix={firstNameSuffix} value={this.state.firstName} id="firstName"
                                onChange={ this.onChangeInputHandler }
                            />
                            <Col span={2} />
                            <InputTextFormItem
                                text='* Last Name:' span={10} placeholder='Enter Last Name' 
                                suffix={lastNameSuffix} value={this.state.lastName} id="lastName"
                                onChange={ this.onChangeInputHandler }
                            />
                            <InputTextFormItem 
                                classProps={{'marginTop': '20px'}}
                                text='* Telephone Number:' span={24} placeholder="Enter Your Telephone Number"
                                prefix={<i className='fas fa-phone' style={{color: '#ccc'}} />} suffix={phoneNumberSuffix} 
                                value={this.state.phoneNumber} id="phoneNumber" onChange={ this.onChangeInputHandler }
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* Job Position:' span={24} placeholder="Enter Job Position"
                                prefix={<i className='fas fa-user-md' style={{color: '#ccc'}} />} suffix={jobPositionSuffix}
                                value={this.state.jobPosition} id="jobPosition" onChange={this.onChangeInputHandler}
                            />
                        </Row>

                        <Row style={{'marginTop': '70px'}}><h1>Create User</h1></Row>
                        <Row>
                            <InputTextFormItem
                                text='* Email:' span={24} placeholder="Enter Email Address"
                                prefix={<i className='fas fa-user' style={{color: '#ccc'}} />} suffix={emailSuffix}
                                value={this.state.email} id="email" onChange={this.onChangeInputHandler}
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* Password:' span={24} placeholder="Enter Password"
                                prefix={<i className='fas fa-key' style={{color: '#ccc'}} />} suffix={passwordSuffix}
                                value={this.state.password} id="password" onChange={this.onChangeInputHandler}
                                type="password"
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* Confirm Password:' span={24} placeholder="Enter Password Again"
                                prefix={<i className='fas fa-key' style={{color: '#ccc'}} />} suffix={confirmPasswordSuffix}
                                value={this.state.confirmPassword} id="confirmPassword" onChange={this.onChangeInputHandler}
                                type="password"
                            />
                        </Row>
                    </Col>

                    <Col span={4} />

                    <Col span={10}>
                        <Row><h1>Company</h1></Row>
                        <Row>
                            <InputTextFormItem 
                                text='* Company Name:' span={24} placeholder="Enter Company's Name"
                                suffix={companyNameSuffix} value={this.state.companyName} id="companyName"
                                onChange={ this.onChangeInputHandler }
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* Address:' span={24} placeholder="Enter Company's Address"
                                prefix={<i className='fas fa-thumbtack' style={{color: '#ccc'}} />} suffix={companyAddressSuffix}
                                value={this.state.companyAddress} id="companyAddress" onChange={this.onChangeInputHandler}
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* City:' span={12} placeholder="Enter City"
                                prefix={<i className='fas fa-map-marker-alt' style={{color: '#ccc'}} />}suffix={companyCitySuffix}
                                value={this.state.companyCity} id="companyCity" onChange={this.onChangeInputHandler}
                            />
                            <Col span={2} />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* Zipcode:' span={10} placeholder="Enter The Zipcode"
                                prefix={<i className='fas fa-map-signs' style={{color: '#ccc'}} />} suffix={companyZipcodeSuffix}
                                value={this.state.companyZipcode} id="companyZipcode" onChange={this.onChangeInputHandler}
                            />
                            <Col span={14} style={{'marginTop': '20px'}}>
                                <span>* Country:</span>
                                <SelectCountry />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row style={{marginTop: '30px'}}>
                    <Checkbox onChange={ this.changeCheckboxHandler.bind(this, 'terms') } />
                    <span>I understand and agree with the <a>Terms of Service</a> and <a>Privacy Policy</a></span>
                    <div><Checkbox /><span>Not a Robot</span></div>
                </Row>

            </Form>
        )
    }
}

export default RegAccount;
