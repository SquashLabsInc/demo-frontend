<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <Todo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Todo,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
