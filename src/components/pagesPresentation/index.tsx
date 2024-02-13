import { Button, Card, Container, Typography } from '@mui/material'
import {
	BLOG_LINK,
	PERSONAL_BLOG_SUFFIX,
	TECH_BLOG_SUFFIX,
} from '../../others/constants'
import './styles.css'
import PersonIcon from '@mui/icons-material/Person'
import DeviceHubIcon from '@mui/icons-material/DeviceHub'
import { Link } from 'react-router-dom'

const cardSx = {
	bgcolor: 'transparent',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	textAlign: 'center',
	'box-shadow': '0px 0px 0px 0px',
	gap: '1vh',
	padding: '2vh',
}

const buttonSx = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1vh',
	padding: '1vh',
	width: '180px',
}

export const PagesPresentation = () => {
	return (
		<Container
			maxWidth='xl'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '2vh',
			}}>
			<Typography variant='h4' fontWeight={'bold'}>
				About this website:
			</Typography>
			<Container
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row', md: 'row' },
					alignItems: 'center',
					justifyContent: 'space-evenly',
					gap: '2vw',
				}}>
				<Card sx={cardSx}>
					<Typography>
						If you want to learn more about my travels and personal
						life, visit my personal blog
					</Typography>
					<Link
						style={{ textDecoration: 'none' }}
						to={`${BLOG_LINK}/${PERSONAL_BLOG_SUFFIX}`}>
						<Button variant='contained' sx={buttonSx}>
							<PersonIcon />
							<Typography>Personal Blog</Typography>
						</Button>
					</Link>
				</Card>
				<Card sx={cardSx}>
					<Typography>
						If you want to learn more about my coding experience,
						visit my tech blog
					</Typography>
					<Link
						style={{ textDecoration: 'none' }}
						to={`${BLOG_LINK}/${TECH_BLOG_SUFFIX}`}>
						<Button variant='contained' sx={buttonSx}>
							<DeviceHubIcon />
							<Typography>Tech Blog</Typography>
						</Button>
					</Link>
				</Card>
			</Container>
		</Container>
	)
}
