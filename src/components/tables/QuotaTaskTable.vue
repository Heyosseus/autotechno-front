<template>
  <div class="flex w-full items-center justify-center mt-10">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            კვოტის მისაღწევად საჭირო <br />ამოცანები
          </th>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            ამოცანის პროდუქტი
          </th>

          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            დაგეგმილი დრო
          </th>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            ფაქტიური დრო
          </th>
          <th
            scope="col"
            class="px-6 py-3 bg-gray-50 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
          >
            შესრულების თარიღი
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
        <tr v-for="(item, index) in data.quotas" :key="index">
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">{{ item.quota_tasks }}</td>
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">
            {{ item.task_product }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">
            {{ item.planned_time }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">
            {{ item.factual_time }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap border border-gray-300">
            {{ item.completion_date }}
          </td>
          <div class="flex items-center justify-center space-x-5">
            <router-link :to="{ name: 'edit-quota-task', params: { id: item.id } }">
              <img src="@/assets/editing.png" alt="" class="w-8 mt-2" />
            </router-link>
            <div class="w-[1px] bg-black h-8 mt-2"></div>
            <img
              src="@/assets/delete.png"
              alt=""
              class="w-8 mt-2 cursor-pointer"
              @click="deleteItem(item.id)"
            />
            <div class="w-[1px] bg-black h-8 mt-2"></div>
            <router-link to="/quota">
              <img src="@/assets/add.png" alt="" class="w-8 mt-3" />
            </router-link>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const data = ref([])

axios.get('http://localhost:8000/api/result').then((response) => {
  data.value = response.data
})

const deleteItem = (nameID) => {
  axios.delete(`http://localhost:8000/api/quota-task/${nameID}`).then(alert('Deleted'))
}
</script>
