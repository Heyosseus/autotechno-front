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
              <label for="">დასახელება</label>
              <Field name="name" type="text" rules="" v-model="name"></Field>
              <ErrorMessage name="name" class="text-red-500 text-xs" />
              <label for="">განზომილება</label>
              <Field name="dimension" type="text" v-model="dimension"></Field>
              <ErrorMessage name="dimension" />
              <label for="">გასული კვირის რაოდენობა</label>
              <Field name="quantity" type="text" v-model="quantity"></Field>
              <label for="">მიმდინარე კვირის კვოტა</label>
              <Field name="quota" type="text" v-model="quota"></Field>
              <label for="">შენიშვნა</label>
              <Field name="note" type="text" v-model="note"></Field>
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
const name = ref('')
const dimension = ref('')
const quantity = ref('')
const quota = ref('')
const note = ref('')
const nameID = router.currentRoute.value.params.id
const data = ref([])


axios.get('http://localhost:8000/api/result').then((response) => {
  data.value = response.data
  name.value = response.data.names.filter((item) => item.id == nameID)[0].name
  dimension.value = response.data.names.filter((item) => item.id == nameID)[0].dimension
  quantity.value = response.data.names.filter((item) => item.id == nameID)[0].quantity_of_last_week
  quota.value = response.data.names.filter((item) => item.id == nameID)[0].quota_last_month
  note.value = response.data.names.filter((item) => item.id == nameID)[0].note
})

const AddItems = () => {
  axios
    .put(`http://localhost:8000/api/name/${nameID}`, {
      name: name.value,
      dimension: dimension.value,
      quantity_of_last_week: quantity.value,
      quota_last_month: quota.value,
      note: note.value
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
