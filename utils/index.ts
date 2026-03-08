export const getStrapiImage = (
  image: any,
  size: 'thumbnail' | 'small' | 'medium' | 'large' = 'small'
) => {
  if (!image || !image.length) return ''
const config = useRuntimeConfig()
  const img = image[0]

  const url =
    img?.formats?.[size]?.url ||
    img?.url

  return url ? `${config.public.base}${url}` : ''
}