import React from 'react'

const TabTitle: React.FC<{
	title: string
	index: number
	setSelectedTab: (index: number) => void
	isSelected: boolean
}> = ({ title, setSelectedTab, index, isSelected }) => {
	const onClick = React.useCallback(() => {
		setSelectedTab(index)
	}, [setSelectedTab, index])

	return (
		<li className={isSelected ? 'is-active' : ''}>
			<a onClick={onClick}>{title}</a>
		</li>
	)
}

export default TabTitle
