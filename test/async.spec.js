import {getDataThroughCallback,getDataThroughPromise} from '../3.async';

// 1.异步回调的方式 想用jest测试
it('测试 传入callback能否拿到最终的结果',(done)=>{
    //expect.assertions(1)
    getDataThroughCallback((data)=>{
        expect(data).toEqual({ name: "zf" });
        done(); // 标识调用完成了
    })
})
// 2.promise的 可以直接返回 或者使用await语法
it('测试promise 能否拿到最终结果 1',()=>{
    expect.assertions(1);
    return getDataThroughPromise().then(data=>{
        expect(data).toEqual({ name: "zf" })
    })
})
it.only('测试promise',async ()=>{
    let data = await getDataThroughPromise();
    expect(data).toEqual({name:'zf'})
})