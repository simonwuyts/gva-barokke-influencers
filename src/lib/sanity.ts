import type { PointOfInterest } from '@/types'

const SANITY_PROJECT_ID = '0en1budh'
const SANITY_API_VERSION = '2023-02-17'
const SANITY_DATASET = 'production'
const SANITY_ENDPOINT = `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=`

export async function fetchPointsOfInterest() {
  const query = `
  *[_type == "pointOfInterest"]{
    coordinates,
    number,
    sattelite,
    category->,
    image,
    contentEn {
      title,
      subtitle,
      description,
      audio
    },
    contentNl {
      title,
      subtitle,
      description,
      audio
    }
  }`
  try {
    const result = await fetch(SANITY_ENDPOINT + encodeURIComponent(query))
    const json = await result.json()
    return json.result as PointOfInterest[]
  } catch (error) {
    console.log(error)
    return []
  }
}
