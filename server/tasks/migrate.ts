import { consola } from 'consola'
import { migrate } from 'drizzle-orm/d1/migrator'

export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Run database seed task'
  },
  async run() {
    try {
      consola.info(' Running DB seed task...')
      await migrate(useDrizzle(), { migrationsFolder: 'server/database/migrations' })

      consola.success(' DB mig task done...')
      return { result: 'Database migrations done' }

    } catch (err) {
      consola.error(' DB mig task failed...', err)
      return { result: 'Database migrations failed', err }
    }
  }
})
