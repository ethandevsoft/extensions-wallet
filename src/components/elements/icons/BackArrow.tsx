import React from 'react'

const BackArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={23}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.064 4.583 4.648 11l6.416 6.417M4.648 11h14.666"
        stroke="#6F6E73"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BackArrowIcon
