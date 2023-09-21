<template>
  <div class="flex items-center space-x-10 mt-10">
    <label for="დასახელება" class="text-lg text-center w-44">დაუგეგმავი ამოცანები:</label>
    <input
      type="text"
      :value="unplanned_task"
      @input="$emit('update:unplanned_task', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
  <div class="flex items-center space-x-10 mt-10">
    <label for="გამზომილება" class="text-lg text-center w-44">ამოცანის პროდუქტი:</label>
    <input
      type="text"
      :value="task_product"
      @input="$emit('update:task_product', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
  <div class="flex items-center space-x-10 mt-10">
    <label for="კვოტა" class="text-lg text-center w-44">ფაქტიური დრო:</label>
    <input
      type="text"
      :value="factual_time"
      @input="$emit('update:factual_time', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
  <div class="flex items-center space-x-10 mt-10">
    <label for="შენიშვნა" class="text-lg text-center w-44">შესრულების თარიღი:</label>
    <input
      type="date"
      :value="completion_date"
      @input="$emit('update:completion_date', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
</template>
<script setup>
defineProps({
  unplanned_task: String,
  task_product: String,
  planned_time: String,
  factual_time: String,
  completion_date: String
})
</script>
