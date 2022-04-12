<template>
  <div class="md-editor-preview">
    <MdEditor
      editorId="blog-editor"
      v-model="markdownContent"
      :previewOnly="true"
      :previewTheme="previewTheme"
    />
    <MdCatalog editorId="blog-editor" :scrollElement="scrollElement" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const MdCatalog = MdEditor.Catalog

export default defineComponent({
  name: 'ArticleMarkdownPreview',
  components: {
    MdEditor,
    MdCatalog
  },
  props: {
    markdownContent: {
      type: String,
      default: 'no data',
      required: true
    },
    previewTheme: {
      type: String,
      default: 'vuepress',
      require: false
    }
  },
  data() {
    return {
      scrollElement: document.scrollingElement
    }
  }

  /*setup() {
    const scrollElement = document.scrollingElement

    return {
      scrollElement
    }
  }*/
})
</script>
<style lang="scss" scoped>
.md-editor-preview {
  display: flex;
  flex-direction: row;
}
</style>
