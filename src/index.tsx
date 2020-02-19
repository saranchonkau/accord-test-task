import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import './assets/css/global.css'
import { GlobalStyle } from './global-style'
import Menu, { MenuItemType } from './components/shared/menu'

console.info(`⚛️ ${React.version}`)

const mockOptions = [
  {
    value: 'evaluations',
    label: 'My evaluations'
  },
  {
    value: 'steps',
    label: 'My steps'
  }
]

function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(
    mockOptions[1]
  )
  return (
    <>
      <GlobalStyle />

      <MenuContainer>
        <Menu
          items={mockOptions}
          selectedItem={selectedItem}
          onChange={setSelectedItem}
        />
      </MenuContainer>
    </>
  )
}

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
