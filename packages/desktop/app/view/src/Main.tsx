import React from 'react'
import ReactDOM from 'react-dom'

import '../css/output.css'

const App = function() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <input type="text" id="username" placeholder="Username"
          className="w-52 h-12 px-3 border border-input_border rounded-xl focus:outline-none focus:border-main_cta" />
        <input type="password" id="password" placeholder="Password"
          className="w-52 h-12 px-3 border border-input_border rounded-xl focus:outline-none focus:border-main_cta" />

        <div className="flex place-content-between">
          <button className="bg-main_cta w-52 h-10 text-white px-3 py-2 border-none rounded-xl hover:bg-opacity-90" id="login">
            Login
          </button>
        </div>
      </div>
    </>
  )
}


const view = App()
const element = document.getElementById('root')

ReactDOM.render(view, element)


