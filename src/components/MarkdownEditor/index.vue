<template>
  <editor
    v-model="text"
    :previewOnly="true"
  ></editor>
</template>

<script>
import { defineComponent } from 'vue'
import Editor from 'md-editor-v3'
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
  }
});
</script>
