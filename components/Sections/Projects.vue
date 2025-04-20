<template>
    <div class="my-projects" id="projects">
      <motion
      as="h1" 
      :variants="animateInView"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="{
        once: true
      }"
      class="title"
      >Projects</motion>
      <div class="project-container">
      <motion
      as="article"
      :variants="animateInView"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="{
        once: true
      }"
        v-for="project in mainProjects"
        :key="project.id"
        class="single-project"
        :class="project.inverted ? 'inverted': ''"
      >
        <a 
          :href="project.liveLink" 
          class="project-img" 
          :style="{ backgroundImage: `url(${project.image})` }"
          target="_blank"
        >
        </a>
        <div class="project-card-container">
          <h3>{{ project.title }}</h3>
          <div class="project-card-1">
            <p class="project-desc">
              {{ project.descr }}
            </p>
            <div class="tech-stack">
              <span v-for="(tech, index) in project.stack" :key="index">{{ tech }}</span>
            </div>
          </div>
          <div class="link-icons">
            <a v-if="project.gitLink" :href="project.gitLink" target="_blank">
              <Icon name="akar-icons:github-fill" class="!text-text-color hover:!text-secondary-color transitionEffect"/>
            </a>
            <a :href="project.liveLink" target="_blank">
              <Icon name="gravity-ui:arrow-up-right-from-square" class="!text-text-color hover:!text-secondary-color transitionEffect"/>
            </a>
          </div>
        </div>
      </motion>
      </div>
    </div>

    <div class="other-projects">
       <motion
      as="h1" 
      :variants="animateInView"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="{
        once: true
      }"
      class="title"
      >other projects</motion>

      <div class="other-project-container">
        <motion
        as="article"
        :variants="animateInView"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="{
          once: true
        }" 
        class="project-card-1" v-for="project in otherProjects" :key="project.id">
          <div 
            class="bg-img" 
            :style="{ backgroundImage: `url(${project.image})` }"
            ></div>
          <div class="link-icons">
            <a v-if="project.gitLink" :href="project.gitLink" target="_blank">
              <Icon name="akar-icons:github-fill" class="!text-primary-color hover:!text-secondary-color transitionEffect" size="60"/>
            </a>
            <a :href="project.liveLink" target="_blank">
              <Icon name="gravity-ui:arrow-up-right-from-square" class="!text-primary-color hover:!text-secondary-color transitionEffect" size="60"/>
            </a>
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p class="desc">{{ project.descr }}</p>
            <div class="tech-stack">
              <span v-for="(tech, index) in project.stack" :key="index">{{ tech }}</span>
            </div>
          </div>
        </motion>
      </div>
    </div>
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
interface Project {
    id: number,
    title: string,
    descr: string,
    stack: string[],
    gitLink?: string,
    liveLink: string,
    image: string,
    inverted?: boolean
}
const mainProjects: Project[] = [
    {
        "id": 1,
        "title": "Geohazard Risk Mapping Initiative",
        "descr": "Official website for GRMI, an initiative focused on identifying and mapping areas at risk of natural hazards like floods, droughts, and heatwaves. Utilizing advanced geospatial technology, AI, and scientific research. The website contains detailed risk maps and informations to support disaster preparedness and response efforts.",
        "stack": ["HTML & CSS", "VueJs", "JavaScript", "TailwindCSS"],
        "gitLink": "",
        "liveLink": "https://www.georiskmap.org/",
        "image": "/grmi.png",
        "inverted": true
    },
    {
        "id": 2,
        "title": "The Stamfordham Brand",
        "descr": "The Stamfordham Brand provides Creative Solutions, Distinguished Branding, and Bespoke Storytelling for busy business owners. The website features engaging video and image content, optimized for fast loading and a seamless user experience",
        "stack": ["HTML & CSS", "VueJs", "JavaScript", "TailwindCSS"],
        "gitLink": "",
        "liveLink": "https://tsb-ten.vercel.app/",
        "image": "/tsb.png",
        "inverted": false
    },
    {
        "id": 3,
        "title": "MySpurr",
        "descr": "MySpurr is helping Africa creative talents find the perfect match for thier skills and interests. We envision a world where every creative talent can nurture their unique gifts and forge sustainable career paths from them.",
        "stack": ["HTML", "TailwindCSS", "VueJs", "JavaScript", "Axios"],
        "gitLink": "",
        "liveLink": "https://www.myspurr.net/",
        "image": "./myspurr.png",
        "inverted": true
    },
    {
        "id": 4,
        "title": "Sports Continent",
        "descr": "A fully responsive E-commerce website with functioning search filters, Integrated Paystack payment gateway, user friendly UI and generally offers an impressive and smooth user experience.",
        "stack": ["HTML", "JavaScript", "Axios", "VueJs", "TailwindCSS"],
        "gitLink": "",
        "liveLink": "https://www.shopsportscontinent.com/",
        "image": "./sports-continent.png",
        "inverted": false
    },
    {
        "id": 5,
        "title": "Muso Ninjas",
        "descr": "Muso Ninja is a music app that allows authorized users the luxury of creating thier own custom playlist with desired songs uploaded from thier devices. Users can also share thier playlist as well as view and favourite playlists of other users.",
        "stack": ["HTML & CSS", "VueJs", "JavaScript", "Firebase"],
        "gitLink": "https://github.com/Deen-Abdultawab/muso-ninjas.git",
        "liveLink": "https://muso-nimjas.web.app/login",
        "image": "./muso-ninjas.png",
        "inverted": true
    },
    {
        "id": 6,
        "title": "Comfy Store",
        "descr": "A fully responsive E-commerce website with functioning search filters, Integrated Paystack payment gateway, user friendly UI and generally offers an impressive and smooth user experience.",
        "stack": ["HTML & CSS", "JavaScript", "APIs"],
        "gitLink": "https://github.com/Deen-Abdultawab/comfy-store.git",
        "liveLink": "https://comfy-store-phi.vercel.app",
        "image": "./comfy-store.png",
        "inverted": false
    }
]

const otherProjects: Project[] = [
    {
      id: 7,
      title: "Tip Calculator",
      descr: "Having problems calculating how much to tip the waiter when you're out? or how to split the tip amongst you and your friends when you hang out in group? This app offers you a smooth way to easily calculate and split tips.",
      stack: ["HTML", "CSS", "JavaScript"],
      gitLink: "https://github.com/Deen-Abdultawab/tip-calculator-app.git",
      liveLink: "https://tip-calculator-app-alpha-two.vercel.app",
      image: "/tip.png"
    },
    {
      id: 8,
      title: "Mini Unsplash Gallery",
      descr: "This is built using the unsplash api to create a beautiful image gallery.",
      stack: ["VueJS", "SCSS", "Unsplash API", "JavaScript"],
      gitLink: "https://github.com/Deen-Abdultawab/cowrywise-fe-test.git",
      liveLink: "https://mini-unsplash-lake.vercel.app/",
      image: "/mini-unsplash.png"
    },
  ]

</script>

<style scoped>

</style>