import {
    React,
    CMForm, CMTop, CMFooter, CMHeader, CMScrollTop,
    Button, Paper, Container, Typography, Divider,
    Table,TableHead,TableRow,TableCell,TableBody
} from '@/core';
import Carsousel from "../components/Menu/carsousel";
import LineShow from "../components/Step/line_show";
import Notification from '@/components/Notification/vertical';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

let { _ } = window;
let rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Index extends React.PureComponent {

  componentDidMount(){
      _.scrollAn()
  }

  render(){
    //let { classes } = this.props;
    return (
        <React.Fragment>
            <CMScrollTop />
            <CMTop />
            <CMHeader />
            <Carsousel />

            <br/><br/>
            <LineShow onClick={(a)=>{console.log(a)}}/>
            <LineShow steps={[{name:'注册',text:'免费注册'}, {name:'注册',text:'免费注册'},{name:'注册',text:'免费注册'},{name:'注册',text:'免费注册'},{name:'注册',text:'免费注册'},{name:'注册',text:'免费注册'},{name:'注册',text:'免费注册'},{name:'注册',text:'免费注册'},]}/>

            <Container>
                <CMForm columns={[
                    {name:'register',text:'注册',value:'2',type:'input',error:'sdfsf'},
                    {name:'register',text:'注册',value:'2',type:'input'},
                    {name:'select',text:'下拉',value:'2',type:'select',options:[{k:'1',v:'name'},{k:'2',v:'trest'}]},
                    {name:'date',text:'日期',type:'date'}
                ]} />
            </Container>

            <br/><br/>
            <Container className="pannel-box">
                <div className="pannel-header fl-r">
                    <Typography variant="h4" className="fl-box">优质采购商</Typography>
                    <Typography variant="subtitle2" className="more fl-one">更多</Typography>
                </div>
                <Paper>
                    1
                </Paper>
            </Container>
            <Container className="pannel-box scrollAn">
                <div className="pannel-header fl-r">
                    <Typography variant="h4" className="fl-box">优质采购商</Typography>
                    <Typography variant="subtitle2" className="more fl-one">更多</Typography>
                </div>
                <Paper className="fl-r">
                    <div className="fl-one" style={{width:'280px',background:'#eee'}}></div>
                    <div className="fl-box">
                        <Table className="" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><Typography variant="subtitle2">Dessert (100g serving)</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="subtitle2">Calories</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="subtitle2">Fat&nbsp;(g)</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="subtitle2">Carbs&nbsp;(g)</Typography></TableCell>
                                    <TableCell align="center"><Typography variant="subtitle2">《 》</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row,idx) => (
                                    <TableRow key={idx} hover>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="center">
                                            <Button color="secondary" size="small">报价</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className="activity_notification fl-one fl">
                        <label className=" fl-one">活跃供应商</label>
                        <Divider />
                        <Notification className="fl-box" style={{width:'300px',height:'280px'}} />
                    </div>
                </Paper>
            </Container>
            <Container className="pannel-box scrollAn">
                <div className="pannel-header fl-r">
                    <Typography variant="h4" className="fl-box">优质采购商</Typography>
                    <Typography variant="subtitle2" className="more fl-one">更多</Typography>
                </div>
                <Paper>
                    1
                </Paper>
            </Container>
            <Container className="pannel-box scrollAn">
                <div className="pannel-header fl-r">
                    <Typography variant="h4" className="fl-box">优质采购商</Typography>
                    <Typography variant="subtitle2" className="more fl-one">更多</Typography>
                </div>
                <Paper>
                    1
                </Paper>
            </Container>

            <br/><br/>
            <CMFooter />
        </React.Fragment>
    )
  }
}

export default Index;

