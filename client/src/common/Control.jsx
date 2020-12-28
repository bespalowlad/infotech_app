import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Control = memo(({ icon }) => {
    return (
        <div className="control">
            <FontAwesomeIcon icon={icon} color="white" size="3x" />
        </div>
    )
})

export default Control