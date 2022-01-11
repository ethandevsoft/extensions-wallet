import React from 'react'

export default function Container(props: {children: React.ReactElement}) {
  return (
    <div>{props.children}</div>
  )
}
