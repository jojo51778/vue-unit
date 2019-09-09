// jest.mock('../4.mock'); // 我使用了 __mocks__ 下的文件
import {forEach,fetchList,fetchUser,mockTimer} from '../4.mock'
// let {forEach} = jest.requireActual('../4.mock')
jest.useFakeTimers();
// 函数  mock文件  mock 某个第三方模块

// mock函数
it('测试forEach是否靠谱',()=>{
    // mock函数 mock出来的函数 可以记录状态 记录调用时候的参数
    let fn = jest.fn();
    forEach([1,2,3],fn);
    expect(fn.mock.calls.length).toBe(3)
    expect(fn.mock.calls[0][0]).toBe(1)
    // [[1],[2],[3]]
    expect(fn.mock.calls[1][0]).toBe(2)
    expect(fn.mock.calls[2][0]).toBe(3)
})
// 把请求的逻辑都mock 掉
it('测试fetchUser 能否获取列表',()=>{
    return fetchUser().then(data=>{
        expect(data).toEqual({name:'zf'})
    })
})

it('测试fecthList 能否获取列表',()=>{
    return fetchList().then(data=>{
        expect(data).toEqual([1,2,3])
    })
})
// mock定时器

it('测试timer事件到达后 可以调用方法',()=>{
    let fn = jest.fn();
    mockTimer(fn);
    // jest.runAllTimers();
    // jest.runOnlyPendingTimers(); // 只执行一次
    jest.advanceTimersByTime(4000);
    expect(fn).toBeCalledTimes(3);
});


