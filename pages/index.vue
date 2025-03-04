<template lang="pug">
  Head
    Title Home Page

  el-text.index(type="primary") Index Home
</template>

<script setup lang="ts">
  const user: any = useUser({
    name: 'dks',
    age: 11
  })
</script>

<style lang="scss" scoped>
.index {
  font-size: 20px;
}
</style>
