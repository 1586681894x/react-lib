import _ from 'lodash';
import React from 'react';
import Api from '@/api/index.js'
import CMForm from '@/components/Form/form'
// import CMLabel from '@/components/label'
// import CMFooter from '@/components/layout/nav'
//
export * from './tool'

export * from './hoc/index';

export * from '@material-ui/core';

export {
    React,
    _,
    CMForm,
    // CMLabel,
    // CMFooter
}

// extend React
Object.defineProperty(React.Component.prototype,'api',{
    value:function(name,param,options){
        return _.get(Api,name)?.call(this,param,options);
    }
});

