export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, message } = body ?? {}

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'Name is required.' })
  }

  if (!email || typeof email !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Email is required.' })
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address.' })
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'Message is required.' })
  }

  if (message.trim().length > 2000) {
    throw createError({ statusCode: 400, statusMessage: 'Message must be 2000 characters or fewer.' })
  }

  // No real email sending — validated and acknowledged
  return {
    success: true,
    message: 'Message received',
  }
})
