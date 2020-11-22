<template>
<div id="Sheet" class="sheet">
  <div class="title">{{month.month + 1}} / {{month.year}}</div>
  <div class="fields">
    <div v-for="d in daysOfWeek" v-bind:key="d" :label="d" class="dayOfWeek"> {{d}} </div>
    <div v-for="d in month.startsWith" v-bind:key="d" :label="d"> </div>
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
  font-size: 0.75rem;
  text-align: center;
}
.sheet {
  margin:0.25rem;
  background-color: #3c3c3c;
  color:#fff9e8;
  border-radius: 0.1rem;

  .title {
    font-size: 1rem;
    padding:.175rem;
    margin-bottom: 0.25rem;
    background-color: #575555;
    font-weight: bold;
  }
}
.fields {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}

</style>
