import React from 'react';

class TableHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		let headerData = this.props.headerData;

		let header = headerData.map((e, i) => {
			return (<th key={i}>{e}</th>)
		});

		return (

			<thead>
			<tr>
				{header}
			</tr>
			</thead>

		);
	}
}

export default TableHeader;