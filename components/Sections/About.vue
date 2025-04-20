<template>
   <motion
   as="div"
   :variants="animateInView"
   initial="hidden"
   while-in-view="visible"
   :in-view-options="{
    once: true
   }"
    class="about-me" id="about">
      <h1 class="title">About Me</h1>
      <div class="container flex gap-[2rem] max-tab:flex-col">
        <div class="col-1 summary flex-1">
          <p>
            I am a passionate front-end developer who has always been captivated by the way technology enhances user experiences and enables businesses to thrive in the digital landscape. This fascination drives my commitment to creating impactful products that enrich users' daily interactions.
          </p> 
          <br>
          <p>
            I enjoy writing clean, maintainable code without compromising performance. I am proficient in HTML, CSS, JavaScript, Vue.js, TailwindCSS, and Firebase. Through building various personal projects, I have solidified my skills, showcased my creativity, and honed my problem-solving abilities.
          </p> 
          <br>
          <p>
            Beyond my technical expertise, I possess strong attention to detail and a willingness to learn and adapt. I understand the importance of effective collaboration within a team and am confident in my ability to communicate complex ideas clearly and concisely.
          </p>
        </div>
        <div class="col-2 my-img basis-[40%] max-tab:basis-full">
            <NuxtImg src="/pic3.jpeg" alt="Salawudeen Abdultwab" class="w-full"/>
        </div>
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


</script>

<style scoped>

</style>