<template>
    <div>
        <input type="text" v-model="value">
        <button @click="add">添加</button>
        <li v-for="todo in todos" :key="todo">{{todo}}</li>
    </div>
</template>

<script>
export default {
    data(){
        return {value:'',todos:[]}
    },  
    methods:{
        add(){
            if(this.value){
              this.todos.push(this.value)
            }
        }
    }

}
</script>