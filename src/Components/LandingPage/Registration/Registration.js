import React, { Component } from 'react';
import { Layout } from 'antd';
import LandingHeader from '../LandingHeader/LandingHeader';
import styles from './Registration.css';
import { Steps, Button, Icon, message } from 'antd';
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

    constructor(props) {
        super();
        this.state = {
            current: 0,
        };
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
                                steps.map( 
                                    (item) => 
                                <Step key={item.title} title={item.title} />
                                )
                            }
                        </Steps>
                    </div>

                    <div className={styles.stepsContent}>
                        {
                            steps[this.state.current].key === 0
                            &&
                            <div>
                                
                            </div>
                        }
                        {
                            steps[this.state.current].key === 1
                            &&
                            <div>Second</div>
                        }
                        {
                            steps[this.state.current].key === 2
                            &&
                            <div>Third</div>
                        }
                        {
                            steps[this.state.current].key === 3
                            &&
                            <div>Fourth</div>
                        }
                    </div>
                    
                    <div className={styles.stepAction}>
                    <div className={styles.stepActionLeft}>
                        <div className={styles.prevButton}>
                            {
                                this.state.current > 0
                                &&
                                <Button style={{ marginLeft: 5 }} type="default" onClick={() => this.prev()}>Previous</Button>
                            }
                        </div>
                    </div>
                        <div className={styles.stepActionRight}>
                            <div className={styles.nextButton}>
                                {
                                    this.state.current < steps.length - 1
                                    && 
                                    <Button type="default" onClick={() => this.next()}>Next</Button>
                                }
                                {
                                    this.state.current === steps.length - 1
                                    &&
                                    <Button type="default" onClick={() => console.log('success fn')}>Done</Button>
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

