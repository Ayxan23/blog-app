import React from 'react'
import styles from "./styles.module.css"

const Loading = () => {
  return (
    <div className={styles.spinnerWrapper}>
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  )
}

export default Loading