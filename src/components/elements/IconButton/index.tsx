import React from 'react'

export default function IconButton(props: {
  children: React.ReactElement
  onClick?: () => void
}) {
  return <button onClick={props.onClick}>{props.children}</button>
}
