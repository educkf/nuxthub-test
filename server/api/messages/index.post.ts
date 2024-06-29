export default eventHandler(async (event) => {
  const { text, title } = await readBody(event)

  const message = await useDrizzle().insert(tables.messages).values({
    text,
    title,
    created_at: new Date()
  }).returning().get()

  return message
})
