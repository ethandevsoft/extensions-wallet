import * as React from "react"
import { SVGProps } from "react"

const RightSmallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={6}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 1 4 4-4 4"
      stroke="#6F6E73"
      strokeOpacity={0.7}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default RightSmallIcon
