/// <reference types="vite/client" />
declare module '*.svg?react' {
  import type React from 'react'

  const SVGComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default SVGComponent
}
