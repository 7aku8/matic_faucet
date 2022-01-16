import { useStore } from 'src/store'

type UseSetVisibilityHook = {
  setVisibility: (_: { id: string, observer: IntersectionObserverEntry }) => void
}

export const useSetVisibility = (): UseSetVisibilityHook => {
  const store = useStore()

  const setVisibility = ({ observer, id }: { id: string, observer: IntersectionObserverEntry }) => {
    if (observer.isIntersecting) {
      store.commit('common/setVisiblePage', id)
    }
  }

  return { setVisibility }
}
