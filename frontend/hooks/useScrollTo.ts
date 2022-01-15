import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

type UseScrollTo = {
  scrollTo: (_: { id: string }) => void
}

interface ScrollToInterface {
  id: string
}

export const useScrollTo = (): UseScrollTo => {
  const scrollTo = ({ id }: ScrollToInterface) => {
    const element = document.querySelector(id) as HTMLElement
    const target = getScrollTarget(element)
    const offset = element.offsetTop
    const duration = 350

    setVerticalScrollPosition(target, offset, duration)
  }

  return { scrollTo }
}
