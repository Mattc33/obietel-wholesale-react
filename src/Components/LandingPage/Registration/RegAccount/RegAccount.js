import React, { Component } from 'react';
import { Row, Col, Form, Icon, Checkbox, Input } from 'antd';
import InputTextFormItem from '../../../Shared/Forms/InputTextFormItem';

import SelectCountry from './SelectCountry';

const FormItem = Form.Item;

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

        const {getFieldDecorator, getFieldsError} = this.props.form;

        const firstNameInput = (
            <FormItem label='First Name:'>
            {
                getFieldDecorator('firstName', 
                    {rules: [{required: true, message: "Please input a first name.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter First Name'
                            suffix={firstNameSuffix}
                            value={this.state.firstName}
                            id='firstName'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const lastNameInput = (
            <FormItem label='Last Name:'>
            {
                getFieldDecorator('lastName', 
                    {rules: [{required: true, message: "Please input a last name.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Last Name'
                            suffix={lastNameSuffix}
                            value={this.state.lastName}
                            id='lastName'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const phoneNumberInput = (
            <FormItem label='Telephone Number:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('phoneNumber', 
                    {rules: [{required: true, message: "Please input a telephone number.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Telephone Number'
                            prefix={<i className='fas fa-phone' style={{color: '#ccc'}} />}
                            suffix={phoneNumberSuffix}
                            value={this.state.phoneNumber}
                            id='phoneNumber'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const jobPositionInput = (
            <FormItem label='Job Position:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('jobPosition', 
                    {rules: [{required: true, message: "Please input a job position.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Job Position'
                            prefix={<i className='fas fa-user-md' style={{color: '#ccc'}} />}
                            suffix={jobPositionSuffix}
                            value={this.state.jobPosition}
                            id='jobPosition'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const emailInput = (
            <FormItem label='Email:'>
            {
                getFieldDecorator('email', 
                    {rules: [{required: true, message: "Please input an email.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Email Address'
                            prefix={<i className='fas fa-user' style={{color: '#ccc'}} />}
                            suffix={emailSuffix}
                            value={this.state.email}
                            id='email'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const passwordInput = (
            <FormItem label='Password:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('password', 
                    {rules: [{required: true, message: "Please input a password.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Email Address'
                            prefix={<i className='fas fa-key' style={{color: '#ccc'}} />}
                            suffix={passwordSuffix}
                            value={this.state.password}
                            id='password'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const confirmPasswordInput = (
            <FormItem label='Confirm Password:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('confirmPassword', 
                    {rules: [{required: true, message: "Please input password again.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Password Again'
                            
                            suffix={confirmPasswordSuffix}
                            value={this.state.confirmPassword}
                            id='confirmPassword'
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
                        <Row><h1>Account</h1></Row>
                        <Row>
                            <Col span={12}>
                                {firstNameInput}
                            </Col>
                            <Col span={2} />
                            <Col span={10}>
                                {lastNameInput}
                            </Col>

                            <Col span={24}>
                                {phoneNumberInput}
                            </Col>

                            <Col span={24}>
                                {jobPositionInput}
                            </Col>
                        </Row>

                        <Row><h1>Create User</h1></Row>
                        <Row>
                            <Col span={24}>
                                {emailInput}
                            </Col>
                            <Col span={24}>
                                {passwordInput}
                            </Col>
                            <Col span={24}>
                                {confirmPasswordInput}
                            </Col>
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

                <Row style={{marginTop: '10px'}}>
                    <Checkbox onChange={ this.changeCheckboxHandler.bind(this, 'terms') } />
                    <span>I understand and agree with the <a>Terms of Service</a> and <a>Privacy Policy</a></span>
                    <div><Checkbox /><span>Not a Robot</span></div>
                </Row>

            </Form>
        )
    }
}

export default Form.create()(RegAccount);
