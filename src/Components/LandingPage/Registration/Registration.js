import React, { Component } from 'react';
import { Layout } from 'antd';
import LandingHeader from '../LandingHeader/LandingHeader';
import styles from './Registration.css';
import { Steps, Button } from 'antd';

import RegAccount from './RegAccount/RegAccount';
import RegInterconnect from './RegInterconnect/RegInterconnect';
import RegBilling from './RegBilling/RegBilling';

const Step = Steps.Step;

const steps = [
    {
        title: 'Account',
        key: 0
    },
    {
        title: 'Contract',
        key: 1
    },
    {
        title: 'Interconnect',
        key: 2
    },  
    {
        title: 'Billing',
        key: 3

    }, 
    {
        title: 'Finalize',
        key: 4
    }
]

class Registration extends Component {

    state = {
        current: 0
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const current = this.state.current;

        const stepperStyle = {
            'background': '#fff',
            'padding': '20px 10px 20px 10px',
        }

        return (
            <Layout style={{'background': '#fff'}}>
                <LandingHeader />
                <div className="registrationContent">
                    <div className={styles.registrationContainer}>
                        <Steps style={stepperStyle} direction="horizontal" current={current} >
                            {
                                steps.map( (item) => 
                                    <Step key={item.title} title={item.title} />
                                )
                            }
                        </Steps>
                    </div>

                    <div className={styles.stepsContent}>
                        {
                            steps[this.state.current].key === 0
                            &&
                            <RegAccount setClick={click => this.clickAccount = click} />
                        }
                        {
                            steps[this.state.current].key === 1
                            &&
                            <div>Second</div>
                        }
                        {
                            steps[this.state.current].key === 2
                            &&
                            <RegInterconnect setClick={click => this.clickInterconnect = click}/>
                        }
                        {
                            steps[this.state.current].key === 3
                            &&
                            <RegBilling setClick={click => this.clickBilling = click}/>
                        }
                        {
                            steps[this.state.current].key === 4
                            &&
                            <div>Fifth</div>
                        }
                    </div>
                    
                    <div className={styles.stepAction}>
                    <div className={styles.stepActionLeft}>
                        <div className={styles.prevButton}>
                            {
                                this.state.current >= 1
                                &&
                                <Button style={{ marginLeft: 5 }} type="default" onClick={() => this.prev()}>Previous</Button>
                            }
                        </div>
                    </div>
                        <div className={styles.stepActionRight}>
                            <div className={styles.nextButton}>
                                {
                                    this.state.current === 0
                                    && 
                                    <Button type="default" onClick={ () => {this.clickAccount(); this.next();} }  disabled={false} >Next(Account)</Button>
                                }
                                {
                                    this.state.current === 1
                                    &&
                                    <Button type="default" onClick={() => this.next()} disabled={false}>Next(Contract)</Button>
                                }
                                {
                                    this.state.current === 2
                                    &&
                                    <Button type="default" onClick={() => {this.clickInterconnect(); this.next();}} disabled={false}>Next(Interconnect)</Button>
                                }
                                {
                                    this.state.current === 3
                                    &&
                                    <Button type="default" onClick={() => {this.clickBilling(); this.next();}} disabled={false}>Next(Billing)</Button>
                                }
                                {
                                    this.state.current === steps.length - 1
                                    &&
                                    <Button type="default" onClick={() => console.log('success fn')} disabled={false}>Done</Button>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
}

export default Registration;

