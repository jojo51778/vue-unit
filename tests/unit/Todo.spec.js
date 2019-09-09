import Todo from '@/components/Todo.vue';

import {shallowMount} from '@vue/test-utils';


it('测试在输入框输入数据 ，放到当前实例上',()=>{
    let wrapper = shallowMount(Todo);
    let input = wrapper.find('input');
    input.setValue("hello"); // value input => v-model
    expect(wrapper.vm.value).toBe('hello');
    wrapper.vm.value = 'world';
    expect(input.element.value).toBe('world');
})

it('点击按钮测试，如果内容为空不能添加一条数据',()=>{
    let wrapper = shallowMount(Todo);
    let input = wrapper.find('input');
    let button = wrapper.find('button');
    input.setValue("");
    button.trigger('click');
    expect(wrapper.findAll('li').length).toBe(0);
})

it('点击按钮测试，如果内容不为空,能添加一条数据',()=>{
    let wrapper = shallowMount(Todo);
    let input = wrapper.find('input');
    let button = wrapper.find('button');
    input.setValue("hello");
    button.trigger('click');
    expect(wrapper.findAll('li').length).toBe(1);
})

it('点击按钮测试，如果内容不为空,能添加一条数据',()=>{
    let wrapper = shallowMount(Todo);
    let input = wrapper.find('input');
    let button = wrapper.find('button');
    input.setValue("hello");
    button.trigger('click');
    expect(wrapper.find('li').text()).toMatch(/hello/);
    expect(1+1).toBe(2)
})

// 先写用例  覆盖率高
// ui组件 只用BDD   集成测试 
// TodoInput ToList TodoItem

// Todo

// jest **