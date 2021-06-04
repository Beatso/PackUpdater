import React from 'react'
import RadioTableRow from './RadioTableRow'

type Props = {
	columnTitles: string[]
	rows: string[][]
	onUpdate: (newPackFormat: number) => void
}

const RadioTable: React.FC<Props> = ({ columnTitles, rows, onUpdate }) => {
	const [selectedRow, setSelectedRow] = React.useState(6)
	return (
		<table className='table'>
			<thead>
				<tr>
					{columnTitles.map((title, index) => (
						<th key={index}>{title}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<RadioTableRow
						cells={row}
						index={index}
						key={index}
						setSelectedRow={(number: number) => {
							onUpdate(number)
							setSelectedRow(number)
						}}
						isSelected={selectedRow === index}
					></RadioTableRow>
				))}
			</tbody>
		</table>
	)
}

export default RadioTable
