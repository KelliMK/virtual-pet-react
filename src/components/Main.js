import React from 'react'

const Main = ({ name, handleChange, makeNewSection, elements }) => {
	return (
		<main>
        <label>Name: <input name={name} onChange={handleChange} type="text" /></label>
        <button onClick={makeNewSection}>Make a new thing!</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {elements.map((item, index) => {
          return (
            <div className="box" key={index}>
                <div>
                 <h2>{item.title}</h2>
                 <p>{item.text}</p>
               </div>
            </div>
          )
        })}
        </main>
	)
}

export default Main