import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import Event from '../formHoc'
//
const _ = window._;

@Event
class Index extends React.PureComponent {
    options = {
        name:'',
        text:'No label',
        value:[],
        error:'',
        options:[
            {k:'',v:'No options!'},
        ],
        rules:[],
        props:{},
        formatter:(val)=>{
            return val || [];
        }
    }

    changeInput(name){
        const opt = this.options;
        return (e)=>{
            if(e.target.checked){
                this._set(_.union(opt.value,[name]))
            }else{
                this._set(_.without(opt.value,name))
            }
        }
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
                <FormHelperText>{opt.text1}</FormHelperText>
                <FormGroup row={!opt.flex}>
                    {opt.options.map((v,i)=>{
                        return (
                            <FormControlLabel
                                key={i}
                                onChange={this.changeInput(v.k)}
                                control={<Checkbox {...opt.comProps}  checked={opt.value.indexOf(v.k)>-1} name={v.k} size="small"/>}
                                label={v.v}
                            />
                        )
                    })}
                </FormGroup>
            </FormControl>
        )
    }
}

export default Index;
