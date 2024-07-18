class Something{
  thingColor = 'blue';

  @logError('oops, something went left!')
  thing(): void{
    throw Error();
    console.log('lol');;
  }

}

// error handler
function logError(err: string){
    return function (target:any, key: string, desc: PropertyDescriptor){
    const func = desc.value;

    desc.value = function(){
        try{
            func()
        } catch(e){
            console.log(err);
        }
    }
}}

new Something().thing()