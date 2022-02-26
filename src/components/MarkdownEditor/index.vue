<template>
  <editor v-model="text" :previewOnly="true" @onGetCatalog="onGetCatalog"></editor>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Editor, { HeadList } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export default defineComponent({
  name: 'VueTemplateDemo',
  components: { Editor },
  props: {
    text: {
      type: String,
      default: 'no data',
      required: true
    }
  },
  setup() {
    const catalogList = ref<Array<HeadList>>([])

    const onGetCatalog = (arr: any[]) => {
      catalogList.value = arr
    }

    console.log(catalogList.value + '--')

    return {
      catalogList,
      onGetCatalog
    }
  }
})
</script>
