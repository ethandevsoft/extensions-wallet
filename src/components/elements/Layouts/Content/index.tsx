import React from 'react'

export default function Content(props: {children: React.ReactElement}) {
  return (
    <div className="px-[16px] py-[12px] mt-[72px]">{props.children}</div>
  )
}
