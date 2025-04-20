<template>
   <button :class="['btn', props,btnClass]">
    <Icon :name="props.name" :size="props.size" :class="props.iconClass"/>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    name?: string,
    size?: string,
    btnClass?: string,
    iconClass?: string
}>()

</script>

<style scoped>

</style>