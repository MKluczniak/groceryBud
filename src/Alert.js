import React, { useEffect } from "react"

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list]) //every time list is updated the useEffect runes again so the "clear list alert is showed for 3 sec, not for the reminding time of the last display" once sth happens to the list we clear out the old setTimeout and get new one

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
