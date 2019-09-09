export default {
    get(url){
        return new Promise((resolve,reject)=>{
            if(url === '/user'){
                resolve({name:'zf'})
            }else if(url === '/list'){
                resolve([1,2,3]);
            }
        })
       
    },
}

// 下期的架构课 在 9。22开班

// 每周 3 ，5 晚上 8-10 
// 周日全天

// 三个晚上