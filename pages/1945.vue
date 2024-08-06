<template></template>

<script>
export default {
  mounted() {
    this.redirectTo('https://dhitgt.github.io/1945/')
  },
  methods: {
    redirectTo(url) {
      window.location.href = url
    },
  },
}
</script>
