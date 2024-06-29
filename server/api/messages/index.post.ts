export default eventHandler(async (event) => {
  const { text } = await readBody(event)

  const message = await useDrizzle().insert(tables.messages).values({
    text,
    createdAt: new Date()
  }).returning().get()

  return message
})
