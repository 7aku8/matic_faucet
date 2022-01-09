<template>
  <q-page
    :style-fn="pageHeight"
    class="bg-secondary row items-center justify-evenly"
  >
    <div style="max-width: 1200px;">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/CompositionComponent.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ])
    const meta = ref<Meta>({
      totalCount: 1200
    })
    const pageHeight = () => {
      return { height: '160vh' }
    }
    return { todos, meta, pageHeight }
  }
})
</script>
