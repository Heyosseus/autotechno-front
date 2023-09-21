<template>
  <div class="flex flex-col">
    <base-header />
    <div class="p-6 flex w-full justify-center">
      <div
        class="bg-white flex mt-10 flex-col justify-center items-center w-fit lg:w-form py-6 px-10 pb-20 rounded-xl max-h-[860px] overflow-y-auto"
      >
        <form action="" class="mt-10 flex md:px-0 lg:px-20 flex-col md:w-[700px] lg:w-full">
          <h1 class="text-4xl text-center mb-2">კვირის გეგმა</h1>
          <div class="w-full h-[1px] mt-4 bg-black"></div>
          <base-form
            :name="name"
            :dimension="dimension"
            :quantity="quantity"
            :quota="quota"
            :note="note"
            @update:name="name = $event"
            @update:dimension="dimension = $event"
            @update:quantity="quantity = $event"
            @update:quota="quota = $event"
            @update:note="note = $event"
          />

          <div class="flex justify-center mt-16">
            <img src="@/assets/next.png" alt="" class="cursor-pointer mt-10" @click="submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseHeader from '../components/layout/BaseHeader.vue'
import BaseForm from '../components/forms/BaseForm.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const dimension = ref('')
const quantity = ref('')
const quota = ref('')
const note = ref('')

const submit = () => {
  axios
    .post('http://localhost:8000/api/name', {
      name: name.value,
      dimension: dimension.value,
      quantity_of_last_week: quantity.value,
      quota_last_month: quota.value,
      note: note.value
    })
    .then(() => {
      router.push('/task')
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
