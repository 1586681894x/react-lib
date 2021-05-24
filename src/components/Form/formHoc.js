import _ from 'lodash';

export default function mixin(com){
    _.extend(com.prototype,{
        _extendColumn(props){
            _.extend(this.options,props.column);
            props.column.$this = this;
        },
        _get(){
            let o = this.options;
            return { [o.name]:o.value }
        },
        _set(val){
            let formater = this.options.formatter;
            this.options.value = formater ? formater(val) : val;
            this.forceUpdate();
        },
        _options(opt){
            if(typeof opt === 'object'){
                _.extend(this.options,opt);
                this.forceUpdate();
            }else{
                this._set(opt);
            }
        },
        _validate(resolve){
            let opt = this.options;
            return _.validate(opt).then(()=>{
                this.forceUpdate();
                return opt;
            })
        },
        _clear(start){
            this.options.error = '';
            this.forceUpdate();
        }
    })
}
