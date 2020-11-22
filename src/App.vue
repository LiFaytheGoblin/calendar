<template>
  <div id="app">
    <Calendar />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue';



export default {
  name: 'App',
  components: {
    Calendar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  color: #2c3e50;
  display:grid;
  justify-content: space-evenly;
}
</style>
