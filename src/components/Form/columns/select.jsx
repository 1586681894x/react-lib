import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Event from '../formHoc'
//
const _ = window._;

@Event
class IndexSelect extends React.PureComponent{
    options = {
        hasNull:false,
        text:'No label',
        rules:[],
        options:[],
        onChange:()=>{}
    }

    handleChange = (e)=>{
        this._set(e.target.value);
        this.options.onChange();
    }

    constructor(props){
        super();
        this._extendColumn(props);
    }

    render(){
        let opt = this.options;
        return (
            <FormControl fullWidth error={Boolean(opt.error)}>
                <InputLabel >{opt.text}</InputLabel>
                <Select
                    {...opt.comProps}
                    value={opt.value}
                    onChange={this.handleChange}
                >
                    {opt.hasNull && <MenuItem value=""><em>None</em></MenuItem>}
                    {opt.options.map((v,i)=>{
                        return <MenuItem key={i} value={v.k}>{v.v}</MenuItem>
                    })}
                </Select>
                <FormHelperText >{opt.error}&nbsp;</FormHelperText>
            </FormControl>
        )
    }
}

export default IndexSelect;
