import React, { useState } from "react";
import Moment from "moment";
import MomentUtils from '@date-io/moment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { KeyboardDatePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import Event from './formHoc'
//
const _ = window._;

@Event
class InlineDateTimePickerDemo extends React.PureComponent{
    options = {
        FORMAT:'YYYY-MM-DD',
        rules:[],
        onChange:()=>{}
    }

    handleChange = (date)=>{
        let opt = this.options;
        this._set(date);//Moment(date).format(opt.FORMAT)
        this.options.onChange();
    }

    constructor(props){
        super();
        this._extendColumn(props);
    }

    render(){
        let { data } = this.props;
        let opt = this.options;
        return (
            <FormControl fullWidth error={Boolean(opt.error)}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                        variant="inline"
                        label={opt.text}
                        value={data[opt.name]}
                        onChange={this.handleChange}
                        format={opt.FORMAT}
                        value-format={opt.FORMAT}
                        invalidDateMessage={false}
                    />
                </MuiPickersUtilsProvider>
                <FormHelperText >{opt.error}&nbsp;</FormHelperText>
            </FormControl>
        )
    }
}

export default InlineDateTimePickerDemo;
