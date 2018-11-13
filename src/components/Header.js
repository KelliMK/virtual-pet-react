import React from 'react'

const Header = ({changeLocation}) => {
	return (
		<header>
      <h1>Hello</h1>
      <nav>
        <ul>
          <li onClick={() => changeLocation('home')}>Home</li>
          <li onClick={() => changeLocation('pet')}>Pet</li>
        </ul>
      </nav>
    </header>
	)
}

export default Header