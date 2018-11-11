<template>
  <div class="character-sheet-wrapper">
    <h1>Tales from the Loop</h1>
    <el-row class="character-sheet">
      <el-col :span="6">
        <SpecTable title="Attributes" v-bind:specs="attributes" />
        <SpecTable title="Conditions" v-bind:specs="conditions" />
        <SpecTable title="Skills" v-bind:specs="skills" />
        <SpecTable title="Experience" counter=true :limit=10 v-bind:specs="experience" />
      </el-col>
      <el-col :span="18">

      </el-col>
    </el-row>
  </div>
</template>

<script>
import SpecTable from './SpecTable'

export default {
  name: 'CharacterSheet',
  computed: {
    attributes () {
      return this.$store.state.attributes
    },
    conditions () {
      return this.$store.state.conditions
    },
    skills () {
      return this.$store.state.skills
    },
    experience () {
      return this.$store.state.experience
    }
  },
  components: {
    'SpecTable': SpecTable
  }
}
</script>

<style scoped>
.character-sheet {
  text-align: left;
}
</style>
