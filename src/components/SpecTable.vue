<template>
  <div class="spec-table attributes">
    <div class="spec-table__header">{{ title }}</div>
    <div class="spec-table__body">
      <div v-if="counter" class="spec-table__element spec-table__element--counter">
        <span v-for="count in specs" :key="'checked' + count" class="spec-table__checkbox spec-table__checkbox--checked">&nbsp;</span>
        <span v-for="count in (limit - specs)" :key="'unchecked' + count" class="spec-table__checkbox">&nbsp;</span>
      </div>
      <div v-else v-for="(value, key) in specs" :key="key" class="spec-table__element">
        <span class="spec-table__element-name">{{ key }}</span>
        <div class="spec-table__element-value-wrapper" v-bind:class="{'spec-table__element-value-wrapper--checked' : value === true, 'spec-table__element-value-wrapper--empty' : specs[key].points != null && specs[key].points === 0}">
          <div class="spec-table__element-value">
            <span v-if="valueIsNumber(value)">{{ value }}</span>
            <span v-else-if="valueIsObject(value)">{{ parseObject(value, key, specs) }}</span>
            <div v-else>&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecTable',
  props: ['title', 'specs', 'counter', 'limit'],
  methods: {
    valueIsNumber (value) {
      return Number.isInteger(value)
    },
    valueIsObject (value) {
      return typeof value === 'object'
    },
    parseObject (value, key, specs) {
      return specs[key].points == null ? value : specs[key].points
    }
  }
}
</script>

<style>
.spec-table {
  border: 1px solid black;
  margin-bottom: 1em;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7);
}
.spec-table__header {
  background: black;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.4em 0.5em;
}
.spec-table__element {
  clear: both;
  padding: 0.3em 0.3em;
  background-color: #f7e5d1;
}
.spec-table__element:not(:last-child) {
  border-bottom: 1px solid black;
}
.spec-table__element:nth-child(even) {
  background-color: #f0bc8d;
}
.spec-table__element--counter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.spec-table__element-name {
  text-transform: capitalize;
  font-weight: bold;
}
.spec-table__element-value-wrapper {
  float: right;
  padding: 0 1em;
}
.spec-table__element-value-wrapper,
.spec-table__checkbox {
  display: inline-block;
  border: 1px solid black;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
.spec-table__element-value-wrapper--checked {
  /* background-color: #f08d8d; */
  background-color: black;
}
.spec-table__element-value-wrapper--empty {
  background-color: grey;
}
.spec-table__checkbox {
  width: 1em;
  height: 1em;
}
.spec-table__checkbox:not(:last-child) {
  margin-right: 0.4em;
}
.spec-table__checkbox--checked {
  background-color: black;
}
</style>
