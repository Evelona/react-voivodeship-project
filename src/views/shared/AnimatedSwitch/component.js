import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Switch, withRouter } from 'react-router-dom'

import { DURATION } from 'config'

const AnimatedSwitch = ({ location, children }) => {
	return pug`
    TransitionGroup(component=null timeout=DURATION.NORMAL)
      CSSTransition(timeout=DURATION.NORMAL key=location.pathname )
        Switch(location=location)
          =children
  `
}

export default withRouter(AnimatedSwitch)