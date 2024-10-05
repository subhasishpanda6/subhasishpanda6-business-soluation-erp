import React, { ReactNode } from 'react'

type TPropsType = {
    children: ReactNode
}

function Layout({ children }:TPropsType) {
    return (
        <div className="pt-[60px] bg-light pb-20">
            <div className='container default-content-height'> {children}</div>
        </div>
    )
}

export default Layout