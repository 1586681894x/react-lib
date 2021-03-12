import _ from 'lodash';
import '../themes/less/index.less';
import React from 'react';
import CMTop from '@/components/Layout/top'
import CMFooter from '@/components/Layout/footer'
import CMScrollTop from '@/components/Layout/scrollTop'
import CMHeader from '@/components/Header/header'
import CMForm from '@/components/Form/form'
//
import './tool'

export * from './comHoc';

export * from './reportWebVitals'

export * from '@material-ui/core';

export {
    _,
    React,
    CMForm,
    CMScrollTop,
    CMFooter,
    CMTop,
    CMHeader
}
