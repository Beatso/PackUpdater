import React from 'react'
import TabTitle from './TabTitle'

type Props = {
	children: React.ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
	const [selectedTab, setSelectedTab] = React.useState(0)
	return (
		<div>
			<div className='tabs'>
				<ul>
					{children.map((item, index) => (
						<TabTitle
							key={index}
							title={item.props.title}
							index={index}
							setSelectedTab={setSelectedTab}
							isSelected={selectedTab === index}
						/>
					))}
				</ul>
				<br />
			</div>
			{children[selectedTab]}
		</div>
	)
}

export default Tabs
