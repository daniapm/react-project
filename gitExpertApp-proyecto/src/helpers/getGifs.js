export const getGifs = async(category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=1d56t1iF3gTq4tMPc621WBT1zmnEj5sN&q=${encodeURI(category)}&limit=10`
	const response = await fetch( url );
	const { data } = await response.json();


	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	})
	return gifs;
}
