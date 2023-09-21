<template>
  <div class="py-6 px-10 w-full bg-blue-950 flex justify-between items-center">
    <router-link to="/">
      <img src="@/assets/autotechno.png" alt="" />
    </router-link>

    <div class="relative flex items-center space-x-12">
      <button @click="showDropdown = !showDropdown" class="text-white text-xl focus:outline-none">
        გვერდები
      </button>

      <ul
        v-show="showDropdown"
        class="absolute top-10 right-52 w-52 p-1 mt-2 bg-white border border-gray-600 rounded-lg shadow-lg z-10"
      >
        <li class="border">
          <router-link to="/task">ამოცანები</router-link>
        </li>
        <li class="border">
          <router-link to="/quota">კვოტა</router-link>
        </li>
        <li class="border">
          <router-link to="/regular-task">რეგულარული ამოცანები</router-link>
        </li>
        <li class="border">
          <router-link to="/training-task">ტრენინგის ამოცანები</router-link>
        </li>
        <li class="border">
          <router-link to="/unplanned-task">დაუგეგმავი ამოცანები</router-link>
        </li>
      </ul>
      <div class="text-white text-xl border-none">
        <router-link to="/result/1">ცხრილი</router-link>
      </div>
      <div>
        <a
          href="https://www.autotechno.ge/contact"
          class="text-white text-xl underline"
          target="_blank"
          >კონტაქტი</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showDropdown = ref(false)
</script>
