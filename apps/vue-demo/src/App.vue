<script setup>
import "../index.css"
import { DataTable } from '@repo/vue-lib';

const headers = [
  { key: 'name', label: 'Name', visible: true },
  { key: 'price', label: 'Price', visible: true },
  { key: 'category', label: 'Category', visible: true },
]

const items = [
  { name: 'Apple', price: '$1.00', category: 'Fruit' },
  { name: 'Bread', price: '$2.50', category: 'Grain' },
  { name: 'Carrot', price: '$0.75', category: 'Vegetable' },
]
</script>

<template>
    <div class="p-12">
      <DataTable :headers="headers" :items="items"/>
    </div>
</template>
