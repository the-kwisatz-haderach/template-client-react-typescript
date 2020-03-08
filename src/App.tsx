import { hot } from 'react-hot-loader/root'
import React from 'react'

interface Props {
  test?: string
}

const App: React.FC<Props> = ({ test }) => {
  return <div>Hello {test} world</div>
}

export default hot(App)
