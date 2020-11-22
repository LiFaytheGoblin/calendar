<template>
  <div id="app">
    <Calendar />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue';

let bookings = [
    {
      "user"      : "Karl Schork",
      "start "    : "2020-12-22",
      "end"       : "2020-12-30"
    },
    {
      "user"     : "Phillip Hoffmann",
      "start"     : "2020-12-23",
      "end"       : "2021-01-02"
    }
];

export default {
  name: 'App',
  bookings: bookings,
  components: {
    Calendar
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #2c3e50;
}
</style>
