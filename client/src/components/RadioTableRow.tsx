import React from 'react'
import './RadioTableRow.css'

type Props = {
	cells: string[]
	index: number
	setSelectedRow: (index: number) => void
	isSelected: boolean
}

const RadioTableRow: React.FC<Props> = ({
	cells,
	isSelected,
	setSelectedRow,
	index,
}) => {
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
