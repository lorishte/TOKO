import React from 'react';

import TableRow from './TableRow';


class TableBody extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		let rowsData = this.props.rowsData;

		let tableRows = rowsData.map((e, i) => {
				return (
					<TableRow key={i} data={e}/>
				);
			}
		);

		return (
			<tbody>
			{tableRows}
			</tbody>
		);
	}
}

export default TableBody;