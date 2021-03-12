import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
        options:[false,true],
        rules:[],
        props:{}
    }

    changeInput = (e)=>{
        let opt = this.props.options;
        this._set(opt.options[e.target.checked?1:0]);
    }

    constructor(props){
        super();
        this._extendColumn(props);
    }

    render(){
        const opt = this.options;
        return (
            <FormControl fullWidth>
                <FormGroup style={{display:'inline'}}>
                    <FormControlLabel
                        control={<Switch {...opt.comProps} checked={opt.value === opt.options[1]} onChange={this.changeInput} />}
                        label={opt.text}
                    />
                </FormGroup>
            </FormControl>
        )
    }
}

export default Index;
