// 测试HelloWorld组件
import {shallowMount} from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue';
it('如果传入msg，这个msg能否正常渲染到h1中',()=>{
    // let baseVue = Vue.extend(HelloWorld); // 获取组件的构造函数
    // let vm = new baseVue({
    //     propsData:{
    //         msg:'hello'
    //     }
    // }).$mount(); // 默认挂载到vm.$el
    // expect(vm.$el.innerHTML).toMatch('hello');
    // vm.$destroy();
    let wrapper = shallowMount(HelloWorld,{
        propsData:{
            msg:'hello'
        }
    })
    expect(wrapper.find('h1').text()).toMatch(/hello/);
});

// tdd & bdd

// tdd 就是 测试驱动 先写测试 ui组件尽量不要是用tdd测试