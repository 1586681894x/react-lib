import React from 'react';
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Event from '../formHoc'

@Event
class Index extends React.PureComponent {

    render = ()=>{
        const { className,options } = this.props;
        return (
            <FormControl fullWidth className="item-vertical">
                <div className="item-vertical-header">
                    <Typography variant="h6">{options.text}</Typography>
                    <Typography variant="body2">{options.text1}</Typography>
                </div>
                <div className="item-vertical-content">

                </div>
            </FormControl>
        )
    }
}

export default Index;
