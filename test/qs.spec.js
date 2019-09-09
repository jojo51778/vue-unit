// 测试用例的写法 
// babel转义语法 babel-jest 
// @babel/core @babel/preset-env
import {parser,stringify} from '../1.qs';
// describe 是分组
// it 用例
describe('测试qs库是否合法',()=>{
    it('测试parser是否能解析数据',()=>{
        // 断言 断定是否相等
        expect(parser("name=zf")).toEqual({name:'zf'})   
    })
    it('测试strinify 是否符合功能',()=>{
        expect(stringify({name:'zf'})).toBe("name=zf"); 
    })
});
