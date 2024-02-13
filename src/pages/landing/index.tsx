import { InfoWithImages } from '../../components/infoWithImages'
import { PagesPresentation } from '../../components/pagesPresentation'
import { PersonalIntroduction } from '../../components/personalIntroduction'
import './styles.css'

export const LandingPage = () => {
	return (
		<div>
			<PersonalIntroduction />
			<InfoWithImages />
			<PagesPresentation />
		</div>
	)
}
