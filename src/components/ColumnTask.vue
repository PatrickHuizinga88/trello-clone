<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="task"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click.native="goToTask(task)"
      >
        <span class="w-full flex-no-shrink">
          {{ task.name }}
        </span>

        <p
          class="w-full flex-no-shrink mt-2 text-small"
          v-if="task.description"
        >
          <!-- {{ task.description }} -->
          <AppIcon icon="align-left"></AppIcon>
        </p>
    </AppDrag>
  </AppDrop>
</template>

<script>
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'
import AppDrag from '@/components/AppDrag'
import AppDrop from '@/components/AppDrop'

export default {
  components: { AppDrag, AppDrop },
  mixins: [movingTasksAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    }
  }
}
</script>

<style scoped>
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
  cursor: pointer;
}

.task:hover {
  background: #efefef;
}
</style>
