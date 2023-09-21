<template>
  <div class="flex space-x-4">
    <table class="w-form divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            დასახელება
          </th>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            განზომილება
          </th>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            გასული კვირის რაოდენობა
          </th>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            მიმდინარე კვირის კვოტა
          </th>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            შენიშვნა
          </th>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            ინსტრუმენტები
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(item, index) in data.names" :key="index">
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">{{ item.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">{{ item.dimension }}</td>
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">
            {{ item.quantity_of_last_week }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">
            {{ item.quota_last_month }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">{{ item.note }}</td>
          <div class="flex items-center justify-center space-x-5">
            <router-link :to="{ name: 'edit-name', params: { id: item.id } }">
              <img src="@/assets/editing.png" alt="" class="w-8 mt-2" />
            </router-link>
            <div class="w-[1px] bg-black h-8 mt-2"></div>
            <img src="@/assets/delete.png" alt="" class="w-8 mt-2 cursor-pointer" @click="deleteItem(item.id)" />
            <div class="w-[1px] bg-black h-8 mt-2"></div>
            <router-link to="/">
              <img src="@/assets/add.png" alt="" class="w-8 mt-3" />
            </router-link>
          </div>
        </tr>
      </tbody>
    </table>

    <RouterView ></RouterView>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
const data = ref([])

axios.get('http://localhost:8000/api/result').then((response) => {
  data.value = response.data
  console.log(data.value)
})

const deleteItem = (nameID) => {
  axios.delete(`http://localhost:8000/api/name/${nameID}`).then(alert('Deleted'))
}
</script>
