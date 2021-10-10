import React from "react";
import { useFechGits } from "../hooks/useFechtGits";
import { GifGridItem } from "./GitGridItem";


export const GitGrid = ({ category }) => {

	const { data: images, loading } = useFechGits(category);

	return (
		<>
			<h3>{category}</h3>
			{loading && <p>Loading...</p>}

			<div className="card-grid">
				{
					images.map(img => (
						<GifGridItem
							key={img.id}
							{...img}
						/>
					))
				}
			
			</div>
		</>

	)
}