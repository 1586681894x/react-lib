import React from 'react';
import Grid from "@material-ui/core/Grid";
import { AC } from './formAc'
//
const { _ } = window;

class Index extends React.Component {
    state = {
        data:{},
        options:{
            xs:4
        }
    }

    getData(){
        let { columns } = this.props;
        let data = this.state.data;
        columns.map((v)=>{
            Object.assign(data,v.$this._get())
        })
        return data;
    }

    validate(callback){
        let { columns } = this.props;
        let pro = [];
        columns.map((v)=>{
            pro.push(new Promise((res)=>{
                v.$this._validate().then(res);
            }));
        })
        //
        Promise.all(pro).then((()=>{
            callback && callback(this.getData())
        }))
    }

    setData(row){
        let { columns } = this.props;
        columns.map((v)=>{
            let item = row[v.name];
            if(!row.hasOwnProperty(v.name)){
                //
            }else if(_.isObject(item)){
                v.$this._options(item);
            }else{
                v.$this._set(item);
            }
        })
        return this;
    }

    resetData(){
        let { columns } = this.props;
        columns.map((v)=>{
            v.$this._set(v.value);
        })
        return this;
    }

    constructor(props){
        super(props);
        AC.options.call(this);// state: { options , columns}
    }

    UNSAFE_componentWillMount(){
        window.form = this;
    }

    renderItem(){
        let { data,options } = this.state;
        let { columns } = this.props;
        return columns.map((v,i)=>{
            let Element = AC.types(v.type);
            return (
                <Grid item className="item" xs={options.xs} key={`${v._key||i}`}>
                    <Element column={v} data={data}/>
                </Grid>
            )
        })
    }

    render(){
        const { className } = this.props;
        return <Grid container className={`form-box ${className}`} spacing={3}>{this.renderItem()}</Grid>
    }
}




export default Index;
