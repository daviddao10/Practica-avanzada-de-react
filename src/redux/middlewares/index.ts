export const loggers = (store:any) => (next:any) => (action:any) =>{
    console.log("🚀 ~ file: index.ts:2 ~ logger ~ store", store)
    console.log("🚀 ~ file: index.ts:2 ~ logger ~ next", next)
    console.log("🚀 ~ file: index.ts:2 ~ logger ~ action", action)
    
// next es la funcion que toca llamar cuando termino

    next(action)
    
}

export const featuring=  (store:any) => (next:any) => (actionInfo:any) =>{
    const featuring = [{name:'eddie'}]
}