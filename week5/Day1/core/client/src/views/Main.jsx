import React, { useState } from 'react'
import Form from '../components/form'
import Productslist from '../components/productslist'

const Main = () => {
    const [refreshState, setRefreshState] = useState(false)
    const refresh = () => {
        setRefreshState(!refreshState)
    }
    return (
        <div>
            <Form refresh={refresh} />
            <Productslist refreshState={refreshState} />
        </div>
    )
}

export default Main