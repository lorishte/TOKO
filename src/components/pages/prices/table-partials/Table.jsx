import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		let data = this.props.data;

		return (

			<table>
				<TableHeader headerData={Object.keys(data[0])}/>
				<TableBody rowsData={data}/>
			</table>

		);
	}
}

export default Table;