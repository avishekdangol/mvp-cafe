<template>
  <div>
    <h4>Search Results</h4>
    {{ searchResults }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let searchResults = ref(null)

    return {
      searchResults,
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {      
      const params = {
        query: this.$route.params.query,
      }
    },
  },
}
</script>
