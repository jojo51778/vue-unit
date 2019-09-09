export const fetchUser = () => {
    return new Promise((resolve,reject)=>{
        resolve({name:'zf'})
    })
  };
  export const fetchList = () => {
    return new Promise((resolve,reject)=>{
        resolve([1,2,3])
    })
  };