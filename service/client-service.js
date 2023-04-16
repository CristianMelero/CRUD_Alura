const listaClientes = () =>
	fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = async (nombre, email) => {
	try {
		const nuevoCliente = await fetch("http://localhost:3000/perfil", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ nombre, email, id: uuid.v4() }),
		});
	} catch (error) {
		window.location.href = "/screens/error.html"
	}{
	return 
}};

const eliminarCliente = (id) => {
	return fetch(`http://localhost:3000/perfil/${id}`, {
		method: "DELETE",
	});
};

const detalleCliente = async (id) => {
	try {
		const respuesta = await fetch(`http://localhost:3000/perfil/${id}`);
		return respuesta.json()
	} catch (error) {
		console.log('El ID no existe');
	}
};

const actualizarCliente = async (nombre, email, id) => {
	try {
		const response = await fetch(`http://localhost:3000/perfil/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ nombre, email }),
		});
		return await response.json()  
	} catch (error) {
		window.location.href = "/screens/error.html"
	}
};

export const clientServices = {
	listaClientes,
	crearCliente,
	eliminarCliente,
	detalleCliente,
	actualizarCliente,
};
