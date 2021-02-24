import React from 'react'
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { sidebarItemsData } from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
	return (
		<Container>
			<Workspace>
				<Name>
					Mario_Bilic
				</Name>
				<New>
					<AddCircleIcon />
				</New>
			</Workspace>

			<Channels>
				{
					sidebarItemsData.map(item => (
						<ChannelItem>
							{item.icon}
							{item.text}
						</ChannelItem>
					))
				}
				
			</Channels>

			<ChannelsContainer>
				<NewChannel>
					<div>
						Channels
					</div>
					<AddIcon />
				</NewChannel>
				<ChannelsList>
					<Channel>
						Channel #1
					</Channel>
					<Channel>
						Channel #2
					</Channel>
				</ChannelsList>
			</ChannelsContainer>
		</Container>
	)
}

export default Sidebar

const Container = styled.div `
	background: #3F0E40;
`
const Workspace = styled.div `
	height: 64px;
	color: white;
	dispay: flex;
	align-items: center;
	padding-left: 19px;
	justify-content: space-between;
	border-bottom: 1px solid #532753;
`
const Name = styled.div `

`
const New = styled.div `
	width: 36px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
	cursor: pointer;
`
const Channels = styled.div `
	padding-top: 20px;
`
const ChannelItem = styled.div `
	color: rgb(188, 171, 188);
	display: grid;
	grid-template-columns: 15% auto;
	height: 28px;
	align-items: center;
	padding-left: 19px;
	cursor: pointer;
	:hover {
		background: #350D36;
	}
`
const ChannelsContainer = styled.div `
color: rgb(188, 171, 188);
margin-top: 10px;
`
const NewChannel = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 28px;
	padding-left: 19px;
	padding-right: 12px;
`
const ChannelsList = styled.div `
	
`
const Channel = styled.div `
	height: 28px;
	padding-left: 35px;
	display: flex;
	align-items: center;
	cursor: pointer;
	:hover {
		background: #350D36;
	}
`