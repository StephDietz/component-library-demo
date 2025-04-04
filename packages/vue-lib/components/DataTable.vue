<template>
    <div>
      <table class="font-mono min-w-full divide-y divide-gray-300 shadow rounded">
        <thead>
          <tr class="h-10 bg-neutral-200">
            <th
              v-for="header in visibleHeaders"
              :key="header.key"
              class="text-sm font-semibold text-gray-900 text-left px-2"
            >
              <span v-if="header.renderAsHtml" v-html="header.label" />
              <span v-else>{{ header.label }}</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr
            v-for="(item, index) in items"
            :key="index"
            :class="[index % 2 === 0 ? 'bg-white' : 'bg-neutral-100', 'hover:bg-primary/20 h-10']"
          >
            <td
              v-for="header in visibleHeaders"
              :key="header.key"
              class="whitespace-nowrap px-2 text-sm text-dark"
              :class="header.class || ''"
            >
              <span v-if="header.renderAsHtml" v-html="item[header.key]" />
              <span v-else>{{ item[header.key] }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  })
  
  const visibleHeaders = computed(() => props.headers.filter((h) => h.visible !== false))
  </script>
  