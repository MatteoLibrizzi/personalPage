import { Box, Card, CardContent, Typography } from '@mui/material'
import './styles.css'

export const PersonalIntroduction = () => {
	return (
		<Card sx={{ bgcolor: 'primary.light', margin: '1vh' }}>
			<CardContent>
				<Box
					display={'flex'}
					flexDirection={'column'}
					alignItems={'center'}
					justifyContent={'center'}
					gap={2}
					paddingTop={2}>
					<Typography variant='h4' fontWeight={'bold'}>
						Matteo Librizzi
					</Typography>
					<Typography>
						My name is Matteo. I'm a software engineer, traveler,
						and blogger.
					</Typography>
				</Box>
			</CardContent>
		</Card>
	)
}
