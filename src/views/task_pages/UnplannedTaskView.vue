<template>
  <div class="flex flex-col">
    <base-header />
    <div class="p-6 flex w-full justify-center">
      <div
        class="bg-white flex mt-10 flex-col justify-center items-center w-form py-6 px-10 pb-20 rounded-xl max-h-[860px] overflow-y-auto"
      >
        <form action="" class="mt-10 flex px-20 flex-col w-full">
          <h1 class="text-4xl text-center mb-2">კვირის გეგმა</h1>
          <div class="w-full h-[1px] mt-4 bg-black"></div>

          <unplanned-task-form
            :unplanned_task="unplanned_task"
            :task_product="task_product"
            :factual_time="factual_time"
            :completion_date="completion_date"
            @update:unplanned_task="unplanned_task = $event"
            @update:task_product="task_product = $event"
            @update:factual_time="factual_time = $event"
            @update:completion_date="completion_date = $event"
          />

          <div class="flex justify-center mt-16">
            <button
              class="px-10 py-4 w-52 hover hover:bg-blue-900 text-white flex justify-center rounded-full bg-blue-950 outline-0"
              @click.prevent  ="submit"
            >
              შენახვა
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseHeader from '../../components/BaseHeader.vue'

import UnplannedTaskForm from '../../components/UnplannedTaskForm.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const unplanned_task = ref('')
const task_product = ref('')
const factual_time = ref('')
const completion_date = ref('')

const submit = async () => {
  const data = {
    unplanned_tasks: unplanned_task.value,
    task_product: task_product.value,
    factual_time: factual_time.value,
    completion_date: completion_date.value
  }
  await axios.post('http://localhost:8000/api/unplanned-task', data).then(() => {
    router.push('/result')
  })
}
</script>
