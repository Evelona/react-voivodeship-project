import logo from '../../statics/logo.webp'
import styled from 'styled-components'

export const Logo = styled.div`
	background: url(${logo}) 0 0 no-repeat;
	background-size: cover;
	position: absolute;
	width: 200px;
	height: 200px;
	z-index: 9;
`