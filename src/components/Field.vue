<template>
  <div id="Field" class="field">
      {{ label }}
  </div>
</template>
<script>
export default {
  name: 'Field',
  props: ['label']
}
</script>
<style lang="scss">
$std-height: 0.5rem;

.field {
  font-size: $std-height;
  text-align: left;
  margin:0.1rem;
  padding:$std-height;
  min-height: $std-height * 5;
  background-color: #fff9e8;
  color:#3c3c3c;
}
</style>
