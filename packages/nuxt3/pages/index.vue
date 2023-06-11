<script setup lang="ts">
import type { User } from '../../api/seeds'

const res = await fetch('http://localhost:8000/users')
const resJson: User[] = await res.json()
</script>

<template>
  <UContainer class="mt-4">
    <UCard>
      <UTable :rows="resJson"></UTable>
    </UCard>
  </UContainer>
</template>