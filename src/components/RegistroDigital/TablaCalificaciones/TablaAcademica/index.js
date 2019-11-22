import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import OpcionesCalificacionesAcademico from '../OpcionesCalificacionesAcademico';

class TablaAcademica extends React.Component {
	render() {
		return (
			<div>
				<Grid>
					<Card body>
						<CardTitle>
							<h2>Prueba de Generacion de tabla</h2>
						</CardTitle>
						<CardText>
							<strong></strong>
							<div>
								
							</div>
						</CardText>
						<Row>
							<Col xs={12} md={12}>
								<OpcionesCalificacionesAcademico />
							</Col>
						</Row>
					</Card>
				</Grid>
			</div>
		);
	}
}

export default TablaAcademica;
