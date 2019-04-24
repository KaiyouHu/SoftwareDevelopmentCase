<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Node2xlsx msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Node2xlsx from './components/Node2xlsx'

export default {
  name: 'app',
  components: {
    Node2xlsx
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
