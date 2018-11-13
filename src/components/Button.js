import React from 'react'

const Button = ({toggleIsMain}) => {
	return (
		<button onClick={toggleIsMain}>
      Change stuff!
    </button>
	)
}

export default Button