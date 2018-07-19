import React, { Component } from 'react';
import { Row, Col, Form, Icon, Checkbox, Input, Button } from 'antd';
import SelectCountry from './SelectCountry';
import styles from './RegAccount.css';

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
            confirmPassword: '',
        // * Checks
            terms: '',
            notRobot: ''
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

    hasErrors = (fieldsError) => {
        console.log(Object.keys(fieldsError).some(field => fieldsError[field]))
        return Object.keys(fieldsError).some(field => fieldsError[field]);
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
                            prefix={<i className='fas fa-key' style={{color: '#ccc'}} />}
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

        const companyNameInput = (
            <FormItem label='Company Name:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('companyName', 
                    {rules: [{required: true, message: "Please input company name.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Company Name'
                            suffix={companyNameSuffix}
                            value={this.state.companyName}
                            id='companyName'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const companyAddressInput = (
            <FormItem label='Address:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('companyAddress', 
                    {rules: [{required: true, message: "Please input company ddress.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Company Address'
                            prefix={<i className='fas fa-thumbtack' style={{color: '#ccc'}} />}
                            suffix={companyAddressSuffix}
                            value={this.state.companyAddress}
                            id='companyAddress'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const companyCity = (
            <FormItem label='City:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('companyCity', 
                    {rules: [{required: true, message: "Please input company city.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Company City'
                            prefix={<i className='fas fa-map-marker-alt' style={{color: '#ccc'}} />}
                            suffix={companyCitySuffix}
                            value={this.state.companyCity}
                            id='companyCity'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const companyZipcode = (
            <FormItem label='Zipcode:' style={{marginTop: '-10px'}}>
            {
                getFieldDecorator('companyZipcode', 
                    {rules: [{required: true, message: "Please input company zipcode.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Company Zipcode'
                            prefix={<i className='fas fa-map-signs' style={{color: '#ccc'}} />}
                            suffix={companyZipcodeSuffix}
                            value={this.state.companyZipcode}
                            id='companyZipcode'
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
                    <Col xs={24} sm={24} lg={10} xl={10}>
                        <Row><h1>Account</h1></Row>
                        <Row>
                            <Col xs={24} sm={24} lg={12} xl={12}>
                                {firstNameInput}
                            </Col>
                            <Col span={2} />
                            <Col xs={24} sm={24} lg={10} xl={10}>
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

                    <Col xs={24} sm={24} lg={10} xl={10}>
                        <Row><h1>Company</h1></Row>
                        <Row>
                        <Col span={24}>
                            {companyNameInput}
                        </Col>
                        <Col span={24}>
                            {companyAddressInput}
                        </Col>
                        <Col xs={24} sm={24} lg={12} xl={12}>
                            {companyCity}
                        </Col>
                        <Col span={2} />
                        <Col xs={24} sm={24} lg={10} xl={10}>
                            {companyZipcode}
                        </Col>
                            <Col xs={24} sm={24} lg={14} xl={14} >
                                <FormItem label='Country:' style={{'marginTop': '-10px'}}>
                                {
                                    getFieldDecorator('companyCountry', 
                                        {rules: [{required: true, message: "Please select a country."}]}
                                    ) ( 
                                    <SelectCountry />
                                    )
                                }
                                </FormItem>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row style={{marginTop: '10px'}}>
                    <Col span={24}>
                    <FormItem >
                        {
                            getFieldDecorator('terms', 
                                {rules: [{required: true, message: 'checkbox'}]}
                        ) (
                            <span className={styles.termsOfService}>
                                <Checkbox onChange={ this.changeCheckboxHandler.bind(this, 'terms') } style={{marginRight: 10}}/>
                                I understand and agree with the <a>Terms of Service</a> and <a>Privacy Policy</a>
                            </span>
                        )
                        }
                    </FormItem>
                    <FormItem style={{marginTop: '-30px'}}>
                        <Checkbox /><span>Not a Robot</span>
                    </FormItem>
                    </Col>
                </Row>

                {/* <Button 
                    type='default'
                    // htmlType="submit"
                    disabled={this.hasErrors(getFieldsError())} 
                >
                    TEST
                </Button> */}

            </Form>
        )
    }
}

export default Form.create()(RegAccount);
