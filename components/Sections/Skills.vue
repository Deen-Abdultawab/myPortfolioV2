<template>
      <motion
        as="div"
        :variants="animateInView"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="{
            once: true
        }"
       class="skill-set section-container" id="skills">
      <div class="skill-header">
        <h1 class="title">Skillset</h1>
        <p>This is a list of my current stack. I'm actively improving on my current skillset by staying up to date with advancement in my stacks. I'm open to picking up new technologies to further improve my productivity</p>
      </div>
      <div class="skills">
        <article
            v-for="skill in skillsets"
            :key="skill.id"
        >
          <h2 class="font-bold !text-[1.2rem] flex items-center gap-4"><Icon :name="skill.icon" class="!text-secondary-color"/>{{ skill.title }}</h2>
          <span>{{ skill.descr }}</span>
        </article>
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

const skillsets = [
    {
        id: 1,
        icon: 'uiw:html5',
        descr: 'I can construct the perfect layout for web apps using HTML and CSS, ensuring that the design specifications are met and providing a pleasant and appealing user experience.',
        title: 'Layout'
    },
    {
        id: 2,
        icon: 'logos:javascript',
        descr: 'I can implement web app functionality and bring it to life, handling tasks such as date functions, APIs, responsiveness, and dynamic content management on the client side.',
        title: 'JavaScript(ES6)'
    },
    {
        id: 3,
        icon: 'akar-icons:github-fill',
        descr: 'Using version control systems and remote repository hosting services, I can manage web apps during and after deployment, make necessary changes and updates, and collaborate seamlessly on team projects.',
        title: 'Version Control'
    },
    {
        id: 4,
        icon: 'carbon:logo-vue',
        descr: 'With Vue.js, I can enhance web app performance, write less code while maintaining efficiency, and leverage powerful features for building interactive and dynamic applications.',
        title: 'VueJs'
    },
    {
        id: 5,
        icon: 'vscode-icons:file-type-firebase',
        descr: 'This tool offers seamless data management, user authentication, data storage, and more. I can effectively use Firebase alongside my other stacks to create powerful web applications.',
        title: 'Firebase'
    },
    {
        id: 6,
        icon: 'ri:tailwind-css-fill',
        descr: 'Tailwind CSS allows me to quickly and efficiently style web applications, providing a utility-first approach that ensures consistency and responsiveness across all devices.',
        title: 'TailwindCSS'
    },
    {
        id: 7,
        icon: 'simple-icons:nuxt',
        descr: 'Tailwind CSS allows me to quickly and efficiently style web applications, providing a utility-first approach that ensures consistency and responsiveness across all devices.',
        title: 'NuxtJS'
    },
    {
        id: 8,
        icon: 'devicon-plain:typescript',
        descr: 'Tailwind CSS allows me to quickly and efficiently style web applications, providing a utility-first approach that ensures consistency and responsiveness across all devices.',
        title: 'Typescript'
    },
]

</script>

<style scoped>

</style>