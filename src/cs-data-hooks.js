/* eslint-disable */
import { ops, selectors } from './app-shell-kit'
import { useSelector } from 'react-redux'

const NonAdmin = 'NonAdmin'

export const useNonAdminCluster = () => useSelector((state) => {
	return selectors.getDataFieldIdByClusterName(state, NonAdmin)
})	
	