import {
    React, _, CForm, CValcode,
    Paper, Button,
} from "@/core";

export default function (props) {
    const EYE = [{
        i:1,
        type:'text',
        endAdornment:<i className="icon1 darkgray basickejian" onClick={handleEye}/>
    },{
        i:0,
        type:'password',
        endAdornment:<i className="icon1 darkgray basicbukejian" onClick={handleEye}/>
    }];
    EYE.active = EYE[1];
    const form = React.createRef();
    const formColumns = [
        {name:'name',text:'账号',type:'input',rules:['required']},
        {name:'pwd',text:'密码',type:'input',rules:['required'],props:EYE.active},
        {name:'code',text:'验证码',type:'input',rules:['required'],onKeyDown:key13,props:{
                endAdornment:<CValcode className="valcode"/>
            }},
        {name:'remember',text:'',type:'checkbox',comProps:{color:'primary'},options:[{k:'true',v:'记住密码'}]}
    ];

    function handleCode(){
        //
    }
    function handleEye(){
        EYE.active = EYE[EYE.active.i];
        form.current.setData({pwd:{props:EYE.active}})
    }
    function handleLogin(){
        let l = window.location;
        form.current.validate((data)=>{
            if(data.name === 'admin' && data.pwd === 'admin'){
                localStorage.setItem('token',data.name);
                localStorage.setItem('username',data.name);
                l.href = _.params.get(l.href,'redirect') || '/home';
            }
        })
    }
    function key13(e) {console.log(e);
        if(e.keyCode === 13) {
            handleLogin()
        }
    }

    React.useEffect(()=>{
        props.onRef && props.onRef({

        })
    })

    return (
        <Paper className="login_box">
            <div className="fl-middle head">
                <img className="icon1" src="/img/logo.png" alt=""/>&nbsp;&nbsp;荣邦控股综合管理平台
            </div>
            <CForm ref={form} xs={12} columns={formColumns}/>
            <br/>
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>登录</Button>
        </Paper>
    )
}
