<template>
  <div id="Calendar">
    <button @click="backward">Zurück</button>
    <button @click="forward">Weiter</button>
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
  props: {
    initialMonth: {
      default: () => {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        return new Month(year, month);
      }
    }
  },
  data() {
    return {
      current: this.initialMonth,
      months: this.getMonths(this.initialMonth)
    }
  },
  components: {
    Sheet
  },
  methods: {
    forward() {
      this.current = this.current.next();
      this.months = this.getMonths(this.current);
    },
    backward() {
      this.current = this.current.previous();
      this.months = this.getMonths(this.current);
    },
    getMonths(baseMonth) {
      const next = baseMonth.next();
      const months = [baseMonth, next, next.next()];
      return months;
    }
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
