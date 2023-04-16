import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const CreateButton = ({text}) => {
  return (
    <button>{text}</button>
  )
}

root.render(
  <React.Fragment>
    <CreateButton text='Primer button'/>
  </React.Fragment>
)
