<template>
    <div class="intro">
      <div>
        <span>Hi, my name is</span>
        <div class="my-details">
          <Motion 
          as="h1"
          :variants="fadeSlideUp"
          initial="hidden"
          animate="visible"
          :custom="0"
          class="name">Salawudeen <span class="">Abdultawab,</span> </Motion>
          <motion
          as="h1"
          :variants="fadeSlideUp"
          initial="hidden"
          animate="visible"
          :custom="1"
           class="role">A front-end developer.</motion>
          <motion
          as="p"
          :variants="fadeSlideUp"
          initial="hidden"
          animate="visible"
          :custom="2"
          class="desc">Skilled in creating neat, responsive and interactive user experience products. I employ the combination of creative and logical problem solving skills with code to profer solutions that offers satisfactory user experiences.
          </motion>
        </div>
        <motion
        as="a"
        :variants="fadeSlideUp"
        initial="hidden"
        animate="visible"
        :custom="3"
        href="/Salawudeen-Abdultawab-Resume.pdf" target="_blank">
          <button class="btn resume-btn">
          <span>resume</span>
          <!-- <i class="fa-solid fa-book-open"></i> -->
        </button>
      </motion>
      </div>
    </div>
</template>

<script setup lang="ts">
import { delay } from 'motion-v';

const fadeSlideUp = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

</script>

<style scoped>

</style>