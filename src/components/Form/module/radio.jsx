import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Event from '../formHoc'
//
const _ = window._;

@Event
class Index extends React.PureComponent {
    options = {
        name:'',
        text:'No label',
        value:'',
        error:'',
        options:[
            {k:'',v:'No options!'},
        ],
        rules:[],
        props:{}
    }

    changeInput = (e)=>{
        this._set(e.target.value);
    }

    constructor(props){
        super();
        this._extendColumn(props);
    }

    render(){
        const opt = this.options;
        return (
            <FormControl fullWidth>
                <FormLabel component="legend">{opt.text}</FormLabel>
                <RadioGroup row={!opt.flex}  value={opt.value} onChange={this.changeInput}>
                    {opt.options.map((v,i)=>{
                        return <FormControlLabel key={i} value={v.k} control={<Radio {...opt.comProps} size="small"/>} label={v.v} />
                    })}
                </RadioGroup>
            </FormControl>
        )
    }
}

export default Index;
