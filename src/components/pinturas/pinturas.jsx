useEffect(() => {
    fetch('mockapi')
	.then(response => response.json()) //json de datos
	.then(res_json => console.log(res_json))
}, [])
