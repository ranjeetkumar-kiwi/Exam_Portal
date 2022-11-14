import React, { useEffect } from 'react'
import ContentArea from './ContentArea'
import SerialNumber from './SerialNumber'

const TestPage = () => {
  useEffect(() => {
    var elem = document.documentElement
    const handlefullScreen = () => {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen()
      }
    }
    handlefullScreen()
    sessionStorage.setItem('fullscreen', true)
  })
  return (
    <div className="grid grid-flow-col auto-cols-[minmax(0,_2fr)]">
      <div>
        <SerialNumber />
      </div>
      <div>
        <ContentArea />
      </div>
    </div>
  )
}

export default TestPage
