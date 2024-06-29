<script setup lang="ts">
const { data: messages, refresh } = await useFetch('/api/messages')
const newMessage = ref('')

async function sendMessage (){
  if (!newMessage.value.trim()) return
  await $fetch('/api/messages', {
    method: 'POST',
    body: {
      text: newMessage.value
    }
  })
  newMessage.value = ''
  await refresh()
}
</script>

<template>
  <div>
    <h3>Messages</h3>
    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" placeholder="Type a message">
      <button type="submit">
        Send
      </button>
    </form>
    <p v-for="message of messages" :key="message.id">
      <div>{{ message.text }}</div>
      <div>{{ new Date(message.createdAt).toLocaleString('pt-BR') }}</div>
    </p>
    <p v-if="!messages?.length">
      No messages yet
    </p>
  </div>
</template>
