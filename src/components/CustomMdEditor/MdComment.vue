<template>
  <editor v-model="text" :toolbars="toolbar" :preview="false" style="height: 200px"></editor>
</template>

<script>
import { defineComponent } from 'vue'
import Editor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export default defineComponent({
  name: 'MdComment',
  components: { Editor },
  data() {
    return {
      text: '',
      toolbar: [
        // 'bold',
        // 'underline',
        // 'italic',
        '-',
        // 'strikeThrough',
        'title',
        // 'sub',
        // 'sup',
        // 'quote',
        // 'unorderedList',
        // 'orderedList',
        '-',
        'codeRow',
        'code',
        // 'link',
        // 'image',
        // 'table',
        // 'mermaid',
        // 'katex',
        '-',
        'revoke',
        'next',
        // 'save',
        // '=',
        // 'pageFullscreen',
        // 'fullscreen',
        'preview'
        // 'htmlPreview',
        // 'catalog',
        // 'github'
      ]
    }
  }
})
</script>
