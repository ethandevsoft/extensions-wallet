import React from 'react'

export default function MainContent(props: {children: React.ReactElement}) {
  return <div className="py-[22px]">{props.children}</div>
}
