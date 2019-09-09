// 测试dom库是否符合

import {removeNode,append,insertBefore} from '../2.dom'

// jsdom 的环境
it('测试能否成功删除元素 removeNode',()=>{
    document.body.innerHTML = `<div><button></button></div>`;

    let button = document.querySelector('button');
    expect(button).not.toBe(null);

    removeNode(button);
    button = document.querySelector('button');
    expect(button).toBe(null);
});
// 如何测试dom.. 也可以使用jquery 来测试 可能更加方便