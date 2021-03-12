import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export default function (Com) {
    return class Dialog extends React.Component{

        onClose = ()=>{
            this.setState({open:false})
        }
        onOpen = (opt)=>{// {}
            opt.open = true;
            this.setState(opt)
        }

        constructor(props){
            super(props);
            this.state = {
                open:false,
                title:'提示',
                buttons:[
                    {text:'Disagree',onClick:this.onClose,props:{}},
                    {text:'Agree',onClick:this.onClose,props:{}},
                ]
            }
        }

        renderButtons(){
            let buttons = this.state.buttons;
            if(buttons.length){
                return (
                    <DialogActions>
                        {
                            buttons.map((v,i)=>{
                                return <Button onClick={v.onClick} color="primary" {...v.props} key={i} >{v.text}</Button>
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
                    <Com {...this.props} $parent={this}></Com>
                    {this.renderButtons()}
                </Dialog>
            )
        }
    }
}
