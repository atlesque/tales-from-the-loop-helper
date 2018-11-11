<template>
  <div class="home">
    <CharacterSheet />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterSheet from '@/components/CharacterSheet.vue'

export default {
  name: 'home',
  components: {
    CharacterSheet
  }
}
</script>
