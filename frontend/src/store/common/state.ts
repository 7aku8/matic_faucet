export interface CommonStateInterface {
  scrollPosition: number;
  visiblePageId: string|null;
}

function state (): CommonStateInterface {
  return {
    scrollPosition: 0,
    visiblePageId: null
  }
}

export default state
