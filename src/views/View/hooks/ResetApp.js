import { RESET_DELAY } from 'config'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const ResetApp = () => {
	const history = useHistory()

	useEffect(() => {
		let timerId = setTimeout(() => {
			history.push('/')
		}, RESET_DELAY)

		const restartTimer = () => {
			clearTimeout(timerId)
			timerId = setTimeout(() => {
				history.push('/')
			}, RESET_DELAY)
		}

		document.body.addEventListener('touchstart', restartTimer)

		return () => document.body.removeEventListener('touchstart', restartTimer)
	}, [])

	return null
}