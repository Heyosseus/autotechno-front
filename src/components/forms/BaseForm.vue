<template>
  <div class="flex items-center space-x-10 mt-4">
    <label for="დასახელება" class="text-lg text-center w-44">დასახელება:</label>
    <input
      type="text"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
  <div class="flex items-center space-x-10 mt-10">
    <label for="გამზომილება" class="text-lg text-center w-44">გამზომილება:</label>
    <input
      type="text"
      :value="dimension"
      @input="$emit('update:dimension', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
  <div class="flex items-center space-x-10 mt-10">
    <label for="რაოდენობა" class="text-lg text-center w-44">გასული კვირის რაოდენობა:</label>
    <input
      type="text"
      :value="quantity"
      @input="$emit('update:quantity', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
  <div class="flex items-center space-x-10 mt-10">
    <label for="კვოტა" class="text-lg text-center w-44">მიმდინარე კვირის კვოტა:</label>
    <input
      type="text"
      :value="quota"
      @input="$emit('update:quota', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
  <div class="flex items-center space-x-10 mt-10">
    <label for="შენიშვნა" class="text-lg text-center w-44">შენიშვნა:</label>
    <input
      type="text"
      :value="note"
      @input="$emit('update:note', $event.target.value)"
      class="w-full ml-auto bg-gray-200 p-4 rounded-full mt-2 outline-0"
    />
  </div>
</template>

<script setup>
defineProps({
  name: String,
  dimension: String,
  quantity: String,
  quota: String,
  note: String
})
</script>
