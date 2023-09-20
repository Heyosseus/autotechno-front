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

          <task-form
            :task="task"
            :task_product="task_product"
            :planned_time="planned_time"
            :factual_time="factual_time"
            :completion_date="completion_date"
            @update:task="task = $event"
            @update:task_product="task_product = $event"
            @update:planned_time="planned_time = $event"
            @update:factual_time="factual_time = $event"
            @update:completion_date="completion_date = $event"
          />

          <div class="flex justify-center mt-16">
            <img src="@/assets/next.png" alt="" class="cursor-pointer mt-10" @click="submit"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseHeader from '../../components/BaseHeader.vue'
import TaskForm from '../../components/TaskForm.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const task = ref('')
const task_product = ref('')
const planned_time = ref('')
const factual_time = ref('')
const completion_date = ref('')

const submit = async () => {
  const data = {
    tasks: task.value,
    task_product: task_product.value,
    planned_time: planned_time.value,
    factual_time: factual_time.value,
    completion_date: completion_date.value
  }
  await axios.post('http://localhost:8000/api/task', data).then(() => {
    router.push('/quota')
  })
}
</script>
