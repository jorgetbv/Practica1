import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Formulario extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<h2>Registro formulario</h2>
					</div>
					<Form>
						<FormGroup>
							<Label className="pop" for="exampleName" />
							<Input type="nombre" name="nombre" id="exampleCentro" placeholder="Nombre del usuario" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleSiglas" />
							<Input type="siglas" name="siglas" id="exampleSiglas" placeholder="IS" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="exampleEmail" />
							<Input type="email" name="email" id="exampleEmail" placeholder="Correo" />
						</FormGroup>
						<FormGroup>
							<Label className="pop" for="examplePassword" />
							<Input type="password" name="password" id="examplePassword" placeholder="Contraseña" />
						</FormGroup>
					</Form>
				</div>
				<div>
					<Button outline color="primary">
						Registrar
					</Button>
				</div>
			</div>
		);
	}
}

export default Formulario;
