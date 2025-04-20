<template>
    <motion
    as="div"
      :variants="animateInView"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="{
        once: true
      }"
    class="contact" id="contacts">
      <h3>Contact Me</h3>
      <h1>Glad you made it this far</h1>
      <p>I do hope my display up until this point was not a waste of your time. Do consider me for future jobs and opportunities.</p>
      <a href="mailto: abdultawabsalawudeen@gmail.com" class="btn hire-btn">Hire Me</a>
      <div class="links">
        <a 
            v-for="link in socialLinks"
            :key="link.id"
            :href="link.path"
            target="_blank"
            class="grid"
        >
            <Icon :name="link.icon" size="30" class="!text-white hover:!text-secondary-color transitionEffect"/>
        </a>
      </div>
    </motion>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v';
const animateInView = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    }
  }
}
const socialLinks = [
    {
        id: 1,
        icon: 'ri:twitter-x-line',
        path: 'https://twitter.com/Sdeen_official'
    },
    {
        id: 2,
        icon: 'akar-icons:github-fill',
        path: 'https://github.com/Deen-Abdultawab'
    },
    {
        id: 3,
        icon: 'fluent:mail-28-filled',
        path: 'mailto: abdultawabsalawudeen@gmail.com'
    },
    {
        id: 4,
        icon: 'akar-icons:whatsapp-fill',
        path: 'https://wa.me/+2347032135453'
    },
]

</script>

<style scoped>

</style>