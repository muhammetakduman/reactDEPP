import React from 'react'
import useToggle from './Hooks/useToggle'


function Toggle() {
    const { isToggled, change } = useToggle();

    return (
        <div>
            {isToggled && <div style={{ width: '200px', height: '200px', backgroundColor: 'blue' }} > KUTU</div>}
            <button onClick={change}>
                {isToggled ? 'gizle' : 'Göster'}
            </button>
        </div>
    )
}

export default Toggle