<template>
  <div class="w-full flex flex-col items-center justify-center">
    <router-link to="/" class="flex space-x-2 items-center mr-auto px-4 mt-2"
      ><img src="@/assets/back.png" alt="" class="w-4 bg-transparent" />
      <p class="underline">მთავარ გვერდზე დაბრუნება</p></router-link
    >
    <div class="w-form px-10 mt-10 space-y-4">
      <h2>ზოგადი დასახელება:</h2>
      <base-form></base-form>
      <h2>ამოცანები პროგრამებისთვის:</h2>

      <task-table></task-table>
      <h2>კვოტა:</h2>

      <quota-task-table></quota-task-table>
      <h2>რეგულარული ამოცანები:</h2>

      <regular-task-table></regular-task-table>
      <h2>ტრენინგის ამოცანები:</h2>

      <training-task-table></training-task-table>
      <h2>დაუგეგმავი დასახელება:</h2>

      <unplanned-task-table></unplanned-task-table>
    </div>
  </div>
</template>
<script setup>
import BaseForm from '../components/tables/BaseTable.vue'
import TaskTable from '@/components/tables/TaskTable.vue'
import QuotaTaskTable from '@/components/tables/QuotaTaskTable.vue'
import RegularTaskTable from '@/components/tables/RegularTaskTable.vue'
import TrainingTaskTable from '@/components/tables/TrainingTaskTable.vue'
import UnplannedTaskTable from '@/components/tables/UnplannedTaskTable.vue'
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 6px;
}
</style>
