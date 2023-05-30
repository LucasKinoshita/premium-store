import { ProductCardProps } from 'components/ProductCard'

const APP_KEY = 'PREMIUM_STORE'

export const getStorageItem = (key: string) => {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export const setStorageItem = (key: string, value: ProductCardProps[]) => {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
