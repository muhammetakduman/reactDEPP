import React, { useState } from 'react'

function useCopyToClipboard(text) {

    const [copied, setCopied] = useState(false)

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => setCopied(true))
            .catch(() => setCopied(false));
    }

    return [
        copied, handleCopyToClipboard
    ]
}

export default useCopyToClipboard