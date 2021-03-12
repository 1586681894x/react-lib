import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from "@material-ui/core/Typography/Typography";
import Event from '../formHoc'
//
const _ = window._;

@Event
class Index extends React.PureComponent {
    options = {
        name:'',
        text:'No label',
        text1:'',
        value:'',
        error:'',
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
        let conf = this.options;
        return (
            <FormControl fullWidth className="item-vertical">
                <div className="item-vertical-header">
                    <Typography variant="h6">{conf.text}</Typography>
                    <Typography variant="body2">{conf.text1}</Typography>
                </div>
                <div className="item-vertical-content">
                    <TextareaAutosize rowsMin={5} rowsMax={20} style={{width:'99%',maxWidth:'99%'}} {...conf.comProps} value={conf.value} onChange={this.changeInput} size="small"/>
                </div>
                <FormHelperText >{conf.error}&nbsp;</FormHelperText>
            </FormControl>
        )
    }
}

export default Index;
