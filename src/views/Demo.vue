<template>
  <div class="m10 flex">
    <MdEditor editor-id="my-editor" v-model="text" :previewOnly="true" />
    <MdCatalog editor-id="my-editor" :scrollElement="scrollElement" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const MdCatalog = MdEditor.Catalog

export default defineComponent({
  name: 'Demo',
  components: {
    MdEditor,
    MdCatalog
  },
  data() {
    return {
      text: `
### 示例1
> hello
### 示例2
> hello
### 示例3
> hello
### 示例4
> hello
### 示例5
> hello
### 示例6
      `,
      scrollElement: document.scrollingElement
    }
  }
})
</script>
