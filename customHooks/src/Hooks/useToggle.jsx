import React, { useState } from 'react'

function useToggle() {
    const [isToggled, setIsToggled] = useState(false)

    const change = () => {
        setIsToggled(!isToggled)
    }

    return {
        isToggled, change
    }
}


export default useToggle