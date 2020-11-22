<template>
<div id="Sheet" class="sheet">
  <div class="title">{{month.month}} / {{month.year}}</div>
  <div class="fields">
    <div v-for="d in daysOfWeek" v-bind:key="d" :label="d" class="dayOfWeek"> {{d}} </div>
    <Field v-for="d in month.daysOfMonth" v-bind:key="d" :label="d" />
  </div>
</div>
</template>

<script>
import Field from './Field.vue';

export default {
  name: 'Sheet',
  props: ['month'],
  computed: {

  },
  data() {
    return {
      daysOfWeek: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"]
    }
  },
  components: {
    Field
  },
  methods: {
  }
}
</script>

<style lang="scss">
.sheet, .dayOfWeek {
  font-size: 1rem;
  text-align: center;
}
.sheet {
  padding:0.1rem;
  margin:0.5rem;

  &:nth-child(2) {
    background-color: #ffe300;
  }

  .title {
    font-size: 1.3rem;
    padding:.5rem;
  }
}
.fields {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}

</style>
