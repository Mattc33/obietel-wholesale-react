import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const SelectCodecs = () => 
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

export default SelectCodecs;
