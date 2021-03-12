import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export default function (Com) {

    return class DialogBox extends React.Component{
        onClose = ()=>{
            this.setState({open:false})
        }
        onOpen = (opt)=>{// {}
            opt.open = true;
            this.setState(opt);
        }
        onConf = (opt)=>{
            this.setState(opt);
        }

        handleButton = (item)=>{
            let st = this.state;
            return ()=>{
                if(!item.key){
                    this.setState({open:false})
                    return;
                }
                //
                st.onSuccess(item).then(()=>{
                    this.state.onEnd();
                    this.setState({open:false})
                })
            }
        }

        constructor(props){
            super(props);
            this.state = {
                open:false,
                title:'提示',
                onEnd:()=>{},
                onSuccess:()=>{ return new Promise(r=>r())},
                buttons:[
                    {text:'Disagree',props:{}},
                    {text:'Agree',key:'ok',props:{}},
                ]
            }
        }

        renderButtons(){
            let buttons = this.state.buttons;
            if(buttons?.length){
                return (
                    <DialogActions>
                        {
                            buttons.map((v,i)=>{
                                return <Button onClick={this.handleButton(v)} color="primary" {...v.props} key={i} >{v.text}</Button>
                            })
                        }
                    </DialogActions>
                )
            }
        }

        render(){
            let st = this.state;
            return (
                <Dialog onClose={this.onClose} aria-labelledby="simple-dialog-title" open={st.open}>
                    <DialogTitle>{st.title}</DialogTitle>
                    <Com {...this.props} onConf={this.onConf}></Com>
                    {this.renderButtons()}
                </Dialog>
            )
        }
    }
}
