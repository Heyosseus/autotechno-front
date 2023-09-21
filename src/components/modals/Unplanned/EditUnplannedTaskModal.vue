<template>
  <div class="relative">
    <teleport to="body">
      <div
        class="absolute w-screen min-h-screen flex flex-col items-center justify-center bg-opacity-50 bg-gray-100 text-white"
      >
        <div class="bg-blue-950 w-[800px] px-20 sm:py-8 rounded-xl" ref="modalRef">
          <div class="modal-content">
            <div class="flex items-center">
              <h2 class="text-3xl text-center mx-auto w-full">რედაქტირება</h2>
              <IconClose class="ml-auto cursor-pointer" @click="router.back()" />
            </div>

            <form @submit.prevent="AddItems" class="mt-6">
              <label for="">ტრენინგის ამოცანები</label>
              <Field name="name" type="text" rules="required" required v-model="task"></Field>
              <ErrorMessage name="name" class="text-red-500 text-xs" />
              <label for=""> ამოცანის პროდუქტი</label>
              <Field name="task_product" type="text" required v-model="task_product"></Field>
              <ErrorMessage name="dimension" />

              <label for="">ფაქტიური დრო</label>
              <Field name="factual_time" type="text" required v-model="factual_time"></Field>
              <label for=""> შესრულების თარიღი</label>
              <Field name="completion_date" type="date" required v-model="completion_date"></Field>
              <button type="submit" class="flex mx-auto py-3 px-12 mt-6 rounded-xl bg-gray-500">
                შენახვა
              </button>
            </form>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script setup>
import { Field, ErrorMessage } from 'vee-validate'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import IconClose from '@/components/icons/IconClose.vue'

const router = useRouter()
const task = ref('')
const task_product = ref('')

const factual_time = ref('')
const completion_date = ref('')
const nameID = router.currentRoute.value.params.id

const data = ref([])

axios.get('http://localhost:8000/api/result').then((response) => {
  data.value = response.data
  task.value = data.value.unplannedTasks.filter((item) => item.id == nameID)[0].unplanned_tasks
  task_product.value = data.value.unplannedTasks.filter((item) => item.id == nameID)[0].task_product
  factual_time.value = data.value.unplannedTasks.filter((item) => item.id == nameID)[0].factual_time
  completion_date.value = data.value.unplannedTasks.filter(
    (item) => item.id == nameID
  )[0].completion_date
})

const AddItems = () => {
  axios
    .put(`http://localhost:8000/api/training-task/${nameID}`, {
      unplanned_tasks: task.value,
      task_product: task_product.value,
      factual_timeh: factual_time.value,
      completion_date: completion_date.value
    })
    .then(() => {
      router.back()
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style scoped>
input {
  display: block;
  margin-top: 22px;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  outline: none;
  color: black;
  border-radius: 8px;
}
label {
  font-size: 18px;
  font-weight: 600;
  color: gray;
  margin-top: 14px;
}
</style>
