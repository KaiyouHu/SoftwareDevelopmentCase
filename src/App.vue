<template>
  <div id="app">
    <Node2xlsx/>
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
  height: 100%;
  /* margin-top: 60px; */
}
</style>
