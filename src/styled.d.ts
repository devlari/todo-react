import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string; 

    colors: {
      primary: string
      secondary: string
      border: string

      background: string
      backgrounditem: string
      text: string

      tag: {
        Study: string,
        Work: string,
        College: string,
        Personal: string,
      }
    }
  }
}