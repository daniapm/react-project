import React, {useState} from "react"
import { AddCategory } from "./components/AddCategory"
import { GitGrid } from "./components/GitGrid"

const GitExpertApp = () => {

	const [categorias, setCategorias] = useState(['One Punch']);
	
	return (
		<>
			<h2>GitExpertApp</h2>
			<AddCategory setCategorias={ setCategorias}/>
			<hr></hr>
		
		<ol>
				{
					categorias.map(category => (
						<GitGrid
							key={category}
							category={category}
						/>
					))
				}
		</ol>
		</>

	)
}


export default GitExpertApp

