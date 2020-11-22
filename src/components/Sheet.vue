<template>
<div>
  {{month.year}} - {{month.month}}
  <ul v-for="d in month.daysOfMonth" v-bind:key="d">
    <li> {{ d }} </li>
  </ul>
</div>
</template>

<script>
/*import Day from './Day.vue';*/

export default {
  name: 'Sheet',
  props: ['month'],
  computed: {

  },
  components: {

  },
  methods: {
  }
}
</script>

<style>

</style>
