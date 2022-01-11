import React from 'react'
import {AppTypographyVariant} from 'types'
import styles from './styles.module.css'

export default function Typography(props: {
  children: string
  variant: AppTypographyVariant
  className?: string
}) {
  const {children, variant, className} = props

  const getClassName = () => {
    if (variant === 'title') {
      return `font-mono text-[#414047] font-semibold ${styles.title} ${className}`
    } else if (variant === 'description') {
      return `font-mono text-[#6F6E73] font-medium ${styles.description} ${className}`
    } else if (variant === 'title1') {
      return `font-mono font-semibold ${styles.title1} ${className}`
    } else if (variant === 'other') {
      return `font-mono font-medium ${styles.other} ${className}`
    }
  }

  return <p className={getClassName()}>{children}</p>
}
