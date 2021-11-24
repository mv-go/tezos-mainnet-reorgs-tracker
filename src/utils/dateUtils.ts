import i18n from '@/i18n'

// TODO: setup as part of i18n date-time formatter
/**
 * Provides a common Intl.DateTimeFormat preset
 */
export const dateFormatter = new Intl.DateTimeFormat(
  i18n.locale,
  {
    dateStyle: 'short',
    timeStyle: 'short',
  },
)
