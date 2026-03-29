export const getStrapiImage = (
  image: any,
  size: 'thumbnail' | 'small' | 'medium' | 'large' = 'small',
) => {
  if (!image) return ''

  const config = useRuntimeConfig()
  // Support both array and object formats
  const img = Array.isArray(image) ? image[0] : image

  if (!img) return ''

  const url = img?.formats?.[size]?.url || img?.url

  return url ? `${config.public.base}${url}` : ''
}
