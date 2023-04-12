import React, { useEffect, useState } from "react";
import axios from 'axios'

const R = (() => {
  let [ msg, setMsg ] = useState('')

  const getMessage = async () => {
    try {
      let { data: res } = await axios.get('http://localhost:3001/react/getMsg')
      if(res.code === 200) {
        msg = setMsg(res.data)
      } else {
        alert(res.message)
      }
    } catch {
      alert('接口异常')
    }
  }

  useEffect(() => {
    getMessage()
  }, [])

  return (
    <>
      <h1>{ msg }</h1>
    </>
  )
})

export default R