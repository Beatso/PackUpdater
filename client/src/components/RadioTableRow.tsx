import React from 'react'
import './RadioTableRow.css'

const RadioTableRow: React.FC<{
	cells: string[]
	index: number
	setSelectedRow: (index: number) => void
	isSelected: boolean
}> = ({ cells, isSelected, setSelectedRow, index }) => {
	const onClick = React.useCallback(() => {
		setSelectedRow(index)
	}, [setSelectedRow, index])

	return (
		<tr
			className={isSelected ? 'is-selected' : 'is-clickable'} // custom css: add is-info tag to make blue
			onClick={onClick}
		>
			{cells.map((cell, index) => (
				<td key={index}>{cell}</td>
			))}
		</tr>
	)
}

export default RadioTableRow
