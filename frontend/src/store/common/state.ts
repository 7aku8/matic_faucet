export interface CommonStateInterface {
  scrollPosition: number;
}

function state (): CommonStateInterface {
  return {
    scrollPosition: 0
  }
}

export default state
