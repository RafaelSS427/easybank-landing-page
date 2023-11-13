'use client'

import { Button } from '@nextui-org/button'

export const RequestButton = () => {
    return (
        <Button color="primary" radius="full" className="transition-opacity bg-gradient-to-r from-limeGreen to-brightCyan hover:opacity-70">
            Request Invite
        </Button>
    )
}