import * as React from "react"
import { SVGProps } from "react"

const RightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.333 1.667 6.667 7l-5.334 5.333"
      stroke="#6F6E73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default RightIcon
