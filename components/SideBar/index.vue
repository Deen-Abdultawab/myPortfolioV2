<template>
    <motion 
    as="section"
    :initial="{
        y: 200,
        opacity: 0
    }"
    :animate="{
        y: 0,
        opacity: 1
    }"
    :transition="{
        ease: 'easeOut',
        duration: 0.6
    }"
    class="social-links">
            <a 
            class="grid"
            v-for="link in socialLinks"
            :key="link.id"
            :href="link.path" target="_blank">
                <Icon :name="link.icon" size="22" class="!text-white hover:!text-secondary-color transitionEffect"/>
            </a>
        <div class="line"></div>
    </motion>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v';

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
        id: 1,
        icon: 'fluent:mail-28-filled',
        path: 'mailto: abdultawabsalawudeen@gmail.com'
    },
]
</script>

<style scoped>

</style>