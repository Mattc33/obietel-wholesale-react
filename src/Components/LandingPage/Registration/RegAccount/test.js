import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Icon, Input, Form} from 'antd'

//
import Header from './layout/Header'

// Import Css
import '../css/Home.css'

class Home extends Component {
    render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
        </Form>
      </div>
    )
  }
}

const WrappedLogin = Form.create()(Home)
ReactDom.render(<WrappedLogin/>, document.getElementById('root'))

export default Home