import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ResultView from '@/views/ResultView.vue'
import TaskView from '@/views/task_pages/TaskView.vue'
import QuotaTaskView from '@/views/task_pages/QuotaTaskView.vue'
import RegularTaskView from '@/views/task_pages/RegularTaskView.vue'
import TrainingTaskView from '@/views/task_pages/TrainingTaskView.vue'
import UnplannedTaskView from '@/views/task_pages/UnplannedTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/result/:id',
      name: 'result',
      component: ResultView,
      props: true,
      children: [
        {
          path: 'edit-name/:id',
          name: 'edit-name',
          component: () => import('@/components/modals/Base/EditBaseModal.vue')
        },
        {
          path: '/edit-task/:id',
          name: 'edit-task',
          component: () => import('@/components/modals/Task/EditTaskModal.vue')
        },
        {
          path: '/edit-regular-task/:id',
          name: 'edit-regular-task',
          component: () => import('@/components/modals/Regular/EditRegularTaskModal.vue')
        },
        {
          path: '/edit-quota-task/:id',
          name: 'edit-quota-task',
          component: () => import('@/components/modals/Quota/EditQuotaTaskModal.vue')
        },
        {
          path: '/edit-training-task/:id',
          name: 'edit-training-task',
          component: () => import('@/components/modals/Training/EditTrainingTaskModal.vue')
        },
        {
          path: '/edit-unplanned-task/:id',
          name: 'edit-unplanned-task',
          component: () => import('@/components/modals/Unplanned/EditUnplannedTaskModal.vue')
        }
      ]
    },

    {
      path: '/task',
      name: 'task',
      component: TaskView
    },
    {
      path: '/quota',
      name: 'quota',
      component: QuotaTaskView
    },
    {
      path: '/regular-task',
      name: 'regular-task',
      component: RegularTaskView
    },
    {
      path: '/training-task',
      name: 'training-task',
      component: TrainingTaskView
    },
    {
      path: '/unplanned-task',
      name: 'unplanned-task',
      component: UnplannedTaskView
    }
  ]
})

export default router
