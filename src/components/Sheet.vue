<template>
<div id="Sheet" class="sheet">
  <div class="title">{{month.month + 1}} / {{month.year}}</div>
  <div class="fields">
    <div v-for="d in daysOfWeek" v-bind:key="d" class="dayOfWeek"> {{d}} </div>
    <div v-for="d in month.startsWith" v-bind:key="d"> </div>
    <Field v-for="d in month.daysOfMonth" v-bind:key="d" :label="d"/>
  </div>
  <div class="markings">
    <div v-for="b in relevantBookings" v-bind:key="b.id" class="marking">
      {{b}}
    </div>
  </div>
</div>
</template>

<script>
import Field from './Field.vue';

let bookings = [
    {
      "id"      : "2020112220201129KARLSCHORK",
      "user"    : "Karl Schork",
      "start"   : {
        "year"  : "2020",
        "month" : "11", //= December
        "day"   : "22"
      },
      "end"     : {
        "year"  : "2020",
        "month" : "11",
        "day"   : "29"
      }
    },
    {
      "id"      : "2020112320210102PHILLIPHOFFMANN",
      "user"    : "Phillip Hoffmann",
      "start"   : {
        "year"  : "2020",
        "month" : "11",
        "day"   : "23"
      },
      "end"     : {
        "year"  : "2021",
        "month" : "0", //= January
        "day"   : "2"
      }
    }
];

export default {
  name: 'Sheet',
  props: ['month'],
  data() {
    return {
      daysOfWeek: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"],
      relevantBookings: this.getRelevantBookings()
    }
  },
  components: {
    Field
  },
  methods: {
    getRelevantBookings() {
      return bookings.filter(booking => {
        return ((booking.start.year == this.month.year)
        && (booking.start.month == this.month.month))
        || ((booking.end.year == this.month.year)
        && (booking.end.month == this.month.month));
      });
    }
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

  .markings {

  }
}
.fields {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}

</style>
