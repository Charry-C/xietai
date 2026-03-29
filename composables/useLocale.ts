import { ref } from 'vue'

export interface LocaleOption {
  code: string
  label: string
  shortLabel: string
  strapiCode: string
}

const LOCALES: LocaleOption[] = [
  { code: 'en', label: 'English', shortLabel: 'EN', strapiCode: 'en' },
  { code: 'cn', label: '中文', shortLabel: '中', strapiCode: 'zh-CN' },
]

const STRAPI_MAP: Record<string, string> = Object.fromEntries(
  LOCALES.map((l) => [l.code, l.strapiCode]),
)

const switching = ref(false)

export const useLocale = () => {
  const { locale } = useI18n()
  const switchPath = useSwitchLocalePath()

  const currentLocale = computed(() => locale.value as string)

  const currentLocaleOption = computed(
    () => LOCALES.find((l) => l.code === currentLocale.value) || LOCALES[0],
  )

  const strapiLocale = computed(() => STRAPI_MAP[currentLocale.value] || 'en')

  const setLocale = async (code: string) => {
    if (code === currentLocale.value) return
    switching.value = true
    const path = switchPath(code as 'en' | 'cn')
    await navigateTo(path)
    switching.value = false
  }

  return {
    currentLocale,
    currentLocaleOption,
    strapiLocale,
    setLocale,
    switching,
    locales: LOCALES,
  }
}
