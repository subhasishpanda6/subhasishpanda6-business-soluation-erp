import  { ReactNode } from 'react'

type TPropsType = {
    children : ReactNode
}

function Text({children} : TPropsType) {
  return (
    <p className='text-slate-500 dark:text-slate-400'>{children}</p>
  )
}

export default Text