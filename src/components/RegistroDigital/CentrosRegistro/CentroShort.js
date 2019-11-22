import React, { Component } from 'react';
import { CardImg, CustomInput, Row, Col } from 'reactstrap';
import PaginationCentro from './PaginationCentro';
import { Button, ButtonGroup } from 'reactstrap';
import logo from './logo.jpeg';

class CentroShort extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				siglas: 'DevOps',
				correo: 'jorge.barajas@softtek.com'
				}
		};
	}
	render() {
		return (
			<div className="container">
				<div className="mt-6">
					<div className="card  mt-4">
						<div className="card-header">{this.state.info.nombreCentro}</div>
						<div className=" card-body">
							<Row>
								<Col sm="12" md={{ size: 6, offset: 3 }}>
									<CardImg src={logo} alt="Card image cap" />
									<CustomInput
										type="switch"
										id="CustomSwitch"
										name="customSwitchCentro"
										label="Active"
										valid={true}
										checked={true}
									/>
								</Col>
							</Row>
						</div>
						<br />
						<div>
							<PaginationCentro />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CentroShort;
