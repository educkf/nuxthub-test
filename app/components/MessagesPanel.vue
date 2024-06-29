<script setup lang="ts">
const { data: messages, refresh } = await useFetch('/api/messages')
const newMessage = reactive({
  title: '',
  text: ''
})

async function sendMessage (){
  if (!newMessage.title || !newMessage.text)
    return

  await $fetch('/api/messages', {
    method: 'POST',
    body: {
      title: newMessage.title,
      text: newMessage.text
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
      <input v-model="newMessage.title" placeholder="Type a title">
      <input v-model="newMessage.text" placeholder="Type a message">

      <button type="submit">Send</button>
    </form>

    <ul v-for="message of messages" :key="message.id">
      <li>
        <div>{{ message.title }}</div>
        <div>{{ message.text }}</div>
        <div>{{ new Date(message.created_at).toLocaleString('pt-BR') }}</div>
      </li>
    </ul>

    <p v-if="!messages?.length">
      No messages yet
    </p>
  </div>
</template>
