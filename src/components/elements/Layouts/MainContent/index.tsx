import React from 'react'

export default function MainContent(props: {children: React.ReactElement}) {
  return <div className="py-[62px]">{props.children}</div>
}
