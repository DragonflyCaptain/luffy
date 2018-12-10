::: tip 参数
func            回调<br/>
wait            等待时间<br/>
immediate       是否立即执行
:::
```js
    function debounce(func, wait, immediate) {
    let timeout, result;
    return function(){
        let context = this;
        let args = arguments;
        if(timeout) clearTimeout(timeout);
        if(immediate){
            let callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            },wait)
            if(callNow) result = func.apply(context, args)
        }else{    
            timeout = setTimeout(function(){
            func.apply(context,args)
            },wait);    
        }
        return result;
    }
```