import React from 'react';

class TableRow extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		let data = this.props.data;
		let rowsData = [];
		for (let key in data) {
			rowsData.push(data[key]);
		}

		let rows = rowsData.map((e, i) => {
			if (Number(e))  return <td key={i}>{e.toFixed(2) + ' лв.'}</td>;
			return <td key={i}>{e}</td>
		});

		return (
			<tr>
				{rows}
			</tr>
		);
	}
}

export default TableRow;