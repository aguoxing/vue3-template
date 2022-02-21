<template>
  <div>
    {{articleId}}
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router"

const router = useRouter()
const articleId = router.currentRoute.value.params.id

</script>

<style scoped>

</style>
