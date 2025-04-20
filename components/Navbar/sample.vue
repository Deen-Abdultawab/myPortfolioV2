<template>
    <nav class="nav-bar">
       <motion
         as="div"
         :initial="animateFade.hidden"
         :animate="animateFade.visible"
         :transition="{
           delay: 0.5
         }"
         class="nav-header"
       >
         <h1 class="logo"><a href="#">Yemi<span>0la</span></a></h1>
         <button class="nav-toggle" type="button" @click="showMobileNav = !showMobileNav">
           <Icon name="ion:menu" size="40"/>
         </button>
       </motion>
       <div class="nav-menu">
        <motion
        as="ul"
        class="nav-links"
        :initial="'hidden'"
        :animate="'visible'"
        :variants="containerVariants"
        :transition="{ staggerChildren: 0.2 }"
      >
        <motion
          v-for="(route, index) in navLinks.slice(0, 4)"
          :key="route.id"
          as="li"
          class="nav-link scroll-link"
          :variants="itemVariants"
          :transition="{ delay: 0.3 + index * 0.2 }"
        >
          <a :href="route.path">{{ route.text }}</a>
        </motion>

        <!-- GitHub Button -->
        <motion
          as="li"
          class="nav-link"
          :variants="itemVariants"
          :transition="{ delay: 1.2 }"
        >
          <a href="https://github.com/Deen-Abdultawab" target="_blank">
            <Icon name="uiw:github" size="25" class="!text-white hover:!text-secondary-color transitionEffect"/>
          </a>
        </motion>
      </motion>
         <motion
         as="a"
         :initial="animateFade.hidden"
         :animate="animateFade.visible"
         :transition="{
             delay: 1.4
           }"
         href="/Salawudeen-Resume.pdf" target="_blank">
             <button class="btn resume-btn flex items-center justify-center w-[7.2rem] h-[2.75rem]">
             <span class="text transitionEffect absolute">resume</span>
             <Icon name="f7:book" class="icon transitionEffect"/>
           </button>
         </motion>
       </div>
   </nav>
 
   <section class="mobile-menu">
     <div class="overlay" :class="showMobileNav? 'show': ''">
       <aside class="sidebar">
         <div class="sidebar-header">
           <h1 class="logo">
             <a href="#">Yemi<span>0la</span></a>
           </h1>
           <button class=" close-btn grid border-2 border-secondary-color cursor-pointer transitionEffect" @click="handleNavToggle">
             <Icon name="iconamoon:close-bold" size="20"/>
           </button>
         </div>
         
         <ul class="side-nav-links">
           <li v-for="link in navLinks" :key="link.id">
             <a :href="link.path" class="sidebar-link scroll-link">
               <Icon :name="link.icon"/>
               {{link.text}}
             </a>
           </li>
           <li>
           <a href="/Salawudeen-Resume.pdf" target="_blank">
                 <button class="btn resume-btn flex items-center justify-center w-[7.2rem] h-[2.75rem] transitionEffect">
                 <span class="text transitionEffect absolute">resume</span>
                 <Icon name="f7:book" class="icon transitionEffect absolute"/>
                 </button>
             </a>
           </li>
         </ul>
       </aside>
     </div>
   </section>
 </template>
 
 <script setup lang="ts">
 import { Motion } from 'motion-v'
 // Variables
 
//  const animateFade = {
//    hidden: {opacity: 0, y: 0},
//    visible: { opacity: 1, y: 1 }
//  }

 const animateFade = {
  hidden: { opacity: 0, y: -50 }, // Slide down from the top
  visible: { opacity: 1, y: 0 }
}

const itemVariants = {
  hidden: { opacity: 0, y: -50 }, // Slide down from the top
  visible: { opacity: 1, y: 0 }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}
 
 const showMobileNav = ref<boolean>(false)
 interface Links {
     id: number,
     text: string,
     icon: string,
     path: string
 }
 
 const navLinks: Links[] = [
     {
         id: 1,
         text: 'about',
         icon: 'iconamoon:profile-fill',
         path: '#about'
     },
     {
         id: 2,
         text: 'skills',
         icon: 'solar:settings-bold',
         path: '#skills'
     },
     {
         id: 3,
         text: 'projects',
         icon: 'flowbite:briefcase-solid',
         path: '#project'
     },
     {
         id: 4,
         text: 'contacts',
         icon: 'fa6-solid:address-card',
         path: '#contact'
     },
     {
         id: 5,
         text: 'github',
         icon: 'akar-icons:github-fill',
         path: 'https://github.com/Deen-Abdultawab'
     },
 ]
 
 // functions
 const handleNavToggle = ()=>{
     showMobileNav.value = !showMobileNav.value
 }
 
 </script>
 
 <style scoped>
 
 </style>