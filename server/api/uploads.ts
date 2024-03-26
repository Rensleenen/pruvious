import { query } from "#pruvious/server"

export default defineEventHandler(async event => {
  const eventQuery = getQuery(event)
  let uploadId = isNaN(eventQuery.id as any) ? null : parseInt(eventQuery.id as any)

  if (uploadId === null) {
    return query('uploads').all()
  } else {
    return query('uploads').whereEq('id', uploadId).first()
  }

})