import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export default function (Com) {
    let conf = this;
    return function(props){// component
        return (
            <Switch>
                <Route path={conf.path} component={Com}/>
                <Redirect from="*" to="/error404" />
            </Switch>
        )
    }
}
