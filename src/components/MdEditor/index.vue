<template>
  <div class="md-editor-preview">
    <md-editor editorId="my-editor" v-model="markdownContent" :previewOnly="true" />
    <md-catalog editor-id="my-editor" :scrollElement="scrollElement" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const MdCatalog = MdEditor.Catalog

export default defineComponent({
  name: 'VueTemplateDemo',
  components: {
    MdEditor,
    MdCatalog
  },
  props: {
    markdownContent: {
      type: String,
      default: 'no data',
      required: true
    }
  },

  setup() {
    const scrollElement = document.scrollingElement

    return {
      scrollElement
    }
  }
})
</script>
<style lang="scss" scoped>
.md-editor-preview {
  display: flex;
  flex-direction: row;
}
</style>
