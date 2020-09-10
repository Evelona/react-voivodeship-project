import { DURATION } from 'config'
import bg from '../../statics/background.webp'
import styled from 'styled-components'

export const Background = styled.div`
	background: url(${bg}) center no-repeat;
	background-size: cover;
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	width: 1920px;
	height: 1080px;
	transition: opacity ${DURATION.SLOW}ms ease;

	&.enter {
		opacity: 0;
		*{
			touch-action: none;
			pointer-events: none;
		}
	}
	&.enter-active {
		opacity: 1;
		
	}
	&.exit  {
		*{
			touch-action: none;
			pointer-events: none;
		}
		opacity: 1;
	}
	&.exit-active {
	  opacity: 0;
	}
`

