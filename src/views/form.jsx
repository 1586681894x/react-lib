import {
    React, Hoc,
    Container,
    CMForm
} from '@/core';

@Hoc({path:'/form/:id',auth:true})
class Index extends React.Component {

    render(){window.sss = this;
        return (
            <Container>
                <CMForm columns={[
                    {name:'register',text:'注册',value:'2',type:'input'},
                    {name:'checkbox',text:'注册',value:'2',type:'checkbox',options:[{k:'1',v:'text'},{k:'12',v:'text22'}]},
                    {name:'select',text:'下拉',value:'2',type:'select',options:[{k:'1',v:'name'},{k:'2',v:'trest'}]},
                    {name:'date',text:'日期',type:'date'}
                ]}
                rules={{register:[{name:'isLength',min:3,max:5}]}}/>
            </Container>
        )
    }
}

export default Index;

