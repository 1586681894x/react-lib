import React  from "react";
import Typography from '@material-ui/core/Typography';

const { _ } = window;

class Index extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            active:false,
            data:getData()
        }
    }

    animation = ()=>{
        let st = this.state;
        this.setState({
            active:true
        },()=>{
            _.delay(()=>{// 动画结束
                st.data.push(st.data.shift());
                this.setState({
                    active:false,
                    data:st.data
                })
            },600)
        })
    }
    bindAnimation = ()=>{
        this.refs.box.onmouseenter = ()=>{
            _.timeout('notification')
        }
        this.refs.box.onmouseleave = ()=>{
            _.timeout('notification',this.animation,3000)
        }
        //
        this.refs.box.onmouseleave();
    }

    componentDidMount(){
        this.bindAnimation();
    }

    render(){
        const { className , ...props } = this.props;
        const st = this.state;
        return (
            <div className={`vertival-notification ${className} ${st.active && 'active'}`}
                {...props} >
                <div className="box" ref="box">
                    {
                        st.data.map((v)=>{
                            return <Item key={v.key} item={v} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Index;

// item
function Item(props){
    let v = props.item;
    return (
        <div className="item">
            <div className="text fl-middle"><span>{v.value}</span></div>
            <Typography variant="subtitle2" className="operation fl-middle">已报价</Typography>
        </div>
    )
}
//
function getData(){
    return [
        {key:1,value:'Component for 1.'},
        {key:2,value:'Component for 2.'},
        {key:3,value:'Component for 3.'},
        {key:4,value:'Component for 4.'},
        {key:5,value:'Component for 5.'},
        {key:6,value:'Component for 6.'},
        {key:7,value:'Component for 7.'},
        {key:8,value:'Component for 8.'},
        {key:11,value:'Component for 11.'},
        {key:12,value:'Component for 12.'},
        {key:13,value:'Component for 13.'},
        {key:14,value:'Component for 14.'},
        {key:15,value:'Component for 15.'},
        {key:16,value:'Component for 16.'},
        {key:17,value:'Component for 17.'},
        {key:18,value:'Component for 18.'},
    ]
}
