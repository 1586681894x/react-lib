import {
    React,
    CMForm,
    Container,
    Hoc
} from '@/core';

@Hoc({type:'auth'})
class Index extends React.Component {

    render(){
        return (
            <Container>
                <div>Layout布局</div>
                <div>
                    {this.props.children}
                </div>
            </Container>
        )
    }
}

export default Index;
