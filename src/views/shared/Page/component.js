import Back from 'Back'
import { Background } from './style'
import { Langs } from 'langs'

const Page = (props) => {
	return pug`
		Background
			if props.page !== 'category'
				Langs(
					position='absolute'
					stick='bottom'
					align='center'
					size='medium'
					style=${{ bottom: 0, left: 810, margin: 0, width: 300 }}
				)
			if props.page === 'category'
				Langs(
					position='absolute'
					stick='bottom'
					align='center'
					size='medium'
					style=${{ bottom: 0, left: 165, margin: 0, width: 300, zIndex: 1000 }}
				)
				Back#Back
			=props.children
	`
}

export default Page