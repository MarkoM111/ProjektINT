<template>
  <q-page padding>
    <div class="q-pa-md">
  <div class="text-h6 q-mb-md">Popis knjiga</div>
  <q-input
  v-model="query"
  outlined
  dense
  clearable
  :debounce="300"
  type="search"
  placeholder="Traži po naslovu ili autoru"
>
  <template #prepend>
    <q-icon name="search" />
  </template>
</q-input>
  <q-list bordered separator>
  <q-item v-for="book in filteredBooks" :key="book.id">
    <q-item-section>
      <q-item-label>{{ book.title }}</q-item-label>
      <q-item-label caption>{{ book.author }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-item v-if="filteredBooks.length === 0">
    <q-item-section>
      <q-item-label>Nema rezultata za "{{ query }}"</q-item-label>
    </q-item-section>
  </q-item>
</q-list>
</div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const query = ref('')

const books = ref([
  { id: 1, title: 'Na Drini ćuprija', author: 'Ivo Andrić' },
  { id: 2, title: 'Prokleta avlija', author: 'Ivo Andrić' },
  { id: 3, title: 'Zločin i kazna', author: 'Fjodor Dostojevski' },
  { id: 4, title: 'Blood Meridian', author: 'Cormac McCarthy' },
  { id: 5, title: 'The Road', author: 'Cormac McCarthy' },
])

const filteredBooks = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return books.value
  return books.value.filter(
    b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
  )
})
</script>
