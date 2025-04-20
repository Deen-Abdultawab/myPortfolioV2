<template>
 <nav class="nav-bar" ref="navBar">
  <Motion
    as="div"
    :variants="fadeSlide"
    initial="hidden"
    animate="visible"
    class="nav-header"
  >
    <h1 class="logo"><a href="#">Yemi<span>0la</span></a></h1>
    <button class="nav-toggle" type="button" @click="handleNavToggle">
      <Icon name="ion:menu" size="40" />
    </button>
  </Motion>

  <Motion
    as="ul"
    :variants="navContainer"
    initial="hidden"
    animate="visible"
    class="nav-links nav-menu"
  >
    <Motion
      as="li"
      v-for="route in navLinks.slice(0, 4)"
      :key="route.id"
      :variants="fadeSlide"
      class="nav-link scroll-link"
      @click="handleScroll(route.text)"
    >
      <a>{{ route.text }}</a>
    </Motion>

    <Motion
      as="li"
      :variants="fadeSlide"
      class="nav-link"
    >
      <a
        href="https://github.com/Deen-Abdultawab"
        class="git-link grid place-items-center"
        target="_blank"
      >
        <Icon name="uiw:github" size="25" class="!text-[white] hover:!text-secondary-color transitionEffect" />
      </a>
    </Motion>
  </Motion>

  <Motion
    as="a"
    href="/Salawudeen-Abdultawab-Resume.pdf"
    target="_blank"
    :variants="fadeSlide"
    initial="hidden"
    animate="visible"
  >
    <button class="btn resume-btn flex items-center justify-center w-[7.2rem] h-[2.75rem]">
      <span class="text transitionEffect absolute">resume</span>
      <Icon name="f7:book" class="icon transitionEffect absolute" />
    </button>
  </Motion>
</nav>

<section class="mobile-menu">
    <div class="overlay" :class="showMobileNav? 'show': ''">
      <aside class="sidebar">
        <div class="sidebar-header">
          <h1 class="logo">
            <a href="#">Yemi<span>0la</span></a>
          </h1>
          <button class="btn grid place-items-center !p-[0rem] !h-auto">
            <Icon name="iconamoon:close-bold" size="25" class="!block"/>
          </button>
        </div>
        
        <ul class="side-nav-links">
          <li 
          v-for="route in navLinks"
          :key="route.id" 
          class="cursor-pointer"
          @click="handleScroll(route.text)"
          >
            <a
              v-bind="route.usePath ? { href: route.path } : {}"
              class="sidebar-link scroll-link flex items-center"
            >
              <Icon :name="route.icon" />
              {{ route.text }}
            </a>
          </li>
          <li>
            <a href="/Salawudeen-Abdultawab-Resume.pdf" target="_blank" class="btn resume-btn">
              <span>resume</span>
              <i class="fa-solid fa-book-open"></i>
            </a >
          </li>
        </ul>
      </aside>
    </div>
  </section>

</template>

<script setup lang="ts">
import { Motion } from 'motion-v'

const navBar = ref(null)
const showMobileNav = ref<boolean>(false)

// Animate logo and nav items
const fadeSlide = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Animate nav container to stagger children
const navContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15, // wave-like delay
      delayChildren: 0.2,
    },
  },
}

interface Links {
  id: number
  text: string
  icon: string
  path: string
  usePath?: boolean
}

const navLinks: Links[] = [
  { id: 1, text: 'about', icon: 'iconamoon:profile-fill', path: '#about' },
  { id: 2, text: 'skills', icon: 'solar:settings-bold', path: '#skills' },
  { id: 3, text: 'projects', icon: 'flowbite:briefcase-solid', path: '#projects' },
  { id: 4, text: 'contacts', icon: 'fa6-solid:address-card', path: '#contact' },
  { id: 5, text: 'github', icon: 'akar-icons:github-fill', path: 'https://github.com/Deen-Abdultawab', usePath: true },
]

const handleNavToggle = () => {
  showMobileNav.value = !showMobileNav.value
  console.log('click')
}

function handleScroll(routeID: string) {
  let navHeight = 0;

  if(showMobileNav.value){
    showMobileNav.value = false
  }

  if (navBar.value) {
    navHeight = (navBar.value as HTMLElement).getBoundingClientRect().height;
    console.log(navHeight)
  }

  const element = document.getElementById(routeID);

  if (element) {
    const position = element.offsetTop - navHeight;
    window.scrollTo({
      top: position,
      left: 0,
      behavior: 'smooth'
    });
  }
}

</script>


<style scoped>
.resume-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
</style>
