import React, { Component } from 'react'
import api from '../api'

class Pet extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pets: []
		}
	}

	getPet = (id) => {
		api(`http://localhost:8080/api/pets/${id}`).then(pet => {
			const newPets = this.state.pets
			newPets.push(pet)
			this.setState({pets: newPets})
		})
	}

	getPets = () => {
		api(`http://localhost:8080/api/pets`).then(pets => {
			const newPets = this.state.pets
			pets.forEach(pet => newPets.push(pet))
			this.setState({pets: newPets})
		})
	}

	componentDidMount() {
		this.getPets()
	}

	render() {
		return (<section>
				{this.state.pets.map((pet, index) => 
					<section key={index}>
						<h2>{pet.name}</h2>
						<p>{pet.type}</p>
					</section>
				)}
			</section>
		)
	}
}

export default Pet