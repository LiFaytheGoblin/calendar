<template>
  <div id="Calendar">
    <div class="sheets">
      <Sheet :month="m" v-for="m in months" v-bind:key="m.id" />
    </div>
  </div>
</template>

<script>
import Sheet from './Sheet.vue';
const Month = require('../models/Month.js');

export default {
  name: 'Calendar',
  props: [],
  computed: {
    initialMonth: function () {
      const date = new Date();
      const month = date.getMonth();
      const year = date.getFullYear();
      return new Month(year, month);
    },
    months: function() {
      return [this.initialMonth.previous(), this.initialMonth, this.initialMonth.next()];
    }
  },
  data() {
    return {

    }
  },
  components: {
    Sheet
  },
  methods: {

  }
}
</script>

<style lang="scss">
#Calendar {
  width:90%;
  margin: 0 auto;
}
.sheets {
    margin: 0;
    padding: 0;
    width:20rem;
}
</style>
