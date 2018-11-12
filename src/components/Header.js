import React from 'react'

const Header = ({ name }) => {
	return (
		<header>
      <h1>Hello, {name}</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Pet</li>
        </ul>
      </nav>
    </header>
	)
}

export default Header