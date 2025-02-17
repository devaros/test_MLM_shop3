const MAX_STORE_TIME = 24 // hours
const NAME_LOCAL_STORE = 'basket_content' // for index name cookie

import { getCookieValue } from '~~/utils/index'

export interface IBasketObject {
  id: number
  title: string
  price: number
}

function toCookie(val: IBasketObject[]) {
  const _ = JSON.stringify(val)
  document.cookie = `${NAME_LOCAL_STORE}=${_}; path=/; max-age=${MAX_STORE_TIME * 60 * 60};`
}

function loadCookieValue() {
  const vv: string | undefined = getCookieValue(NAME_LOCAL_STORE)
  if (!vv) return []
  const _ = JSON.parse(vv)
  return _ as IBasketObject[]
}

const ff = loadCookieValue()

const defaultValue: IBasketObject[] = []

export const useBasketStore = defineStore('basketStore', {
  state: () => ({ value: defaultValue }),
  getters: {
    basket: state => state.value,
    ids: state => state.value.map(r => r.id) as number[],
  },
  actions: {
    update(val: IBasketObject) {
      const { id, title, price }: IBasketObject = val
      if (this.value.find(r => r.id === id)) return
      this.value.push({ id, title, price })
      this.value = [...this.value]
      toCookie(this.value)
    },
    set(val: IBasketObject) {
      this.value.push(val)
      toCookie(this.value)
    },
    clear() {
      this.value.length = 0
      toCookie(this.value)
    },
    delete(id: number) {
      this.value = this.value.filter(r => r.id !== id)
      toCookie(this.value)
    },
    load() {
      this.value.push(...ff)
    },
  }
})