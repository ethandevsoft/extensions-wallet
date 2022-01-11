import * as React from 'react'
import {SVGProps} from 'react'

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.481 17.5-3.738-3.745L18.48 17.5Zm-1.667-8.75a7.083 7.083 0 1 1-14.167 0 7.083 7.083 0 0 1 14.167 0v0Z"
      stroke="#6F6E73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SearchIcon
