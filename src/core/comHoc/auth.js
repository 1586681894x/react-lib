import React from "react";
import Fade from "@material-ui/core/Fade/Fade";


export default function(Com){
    if (Com.$this) {
        return Com.$this
    }

    // 创建验证组件
    class Auth extends React.PureComponent {
        state = {
            isLogin: false,
        }

        loaded() {
            //let user = this.store.
            setTimeout(()=>{
                this.setState({
                    isLogin:true
                })
            },2000)
        }

        UNSAFE_componentWillMount(){
            this.loaded();
        }

        render() {
            let st = this.state;
            if(st.isLogin){
                return (
                    <Fade in={st.isLogin} >
                        <div>
                            <Com {...this.props} />
                        </div>
                    </Fade>
                )
            }else{
                return (
                    <div>
                        user is loading !!!!
                    </div>
                )
            }
        }
    }

    return Com.$this = Auth;
}
