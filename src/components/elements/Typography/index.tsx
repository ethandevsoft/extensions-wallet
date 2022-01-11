import React from 'react'
import {AppTypographyVariant} from 'types'
import styles from './styles.module.css'

export default function Typography(props: {
  children: string
  variant: AppTypographyVariant
}) {
  const {children, variant} = props

  const getClassName = () => {
    if (variant === 'title') {
      return `font-mono text-[#414047] font-semibold ${styles.title}`
    } else if (variant === 'description') {
      return `font-mono text-[#6F6E73] font-medium ${styles.description}`
    } else if (variant === 'title1') {
      return `font-mono font-semibold ${styles.title1}`
    }
  }

  return <p className={getClassName()}>{children}</p>
}
