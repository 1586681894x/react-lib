import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Event from '../formHoc'
//
const _ = window._;

@Event
class IndexInput extends React.PureComponent{
    options = {
        name:'',
        text:'No label',
        value:'',
        error:'',
        rules:[],
        props:{},
        onChange:()=>{},
        onKeyDown:()=>{}
    }

    handleChange = (e)=>{
        this._set(e.target.value);
        this._validate();
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
                <InputLabel htmlFor="my-input">{opt.text}</InputLabel>
                <Input {...opt.props} value={opt.value} onChange={this.handleChange} onKeyUp={this.options.onKeyDown} size="small"/>
                <FormHelperText >{opt.error}&nbsp;</FormHelperText>
            </FormControl>
        )
    }
}

export default IndexInput;
