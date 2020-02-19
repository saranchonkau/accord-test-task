import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import './assets/css/global.css'
import { GlobalStyle } from './global-style'
import Menu, { MenuItemType } from './components/shared/menu'
import PersonMenuItem, {
  PersonMenuItemType
} from './components/shared/PersonMenuItem'
import { mockItems, mockPersonItems } from './lib/mocks'

function filterPersonItem(query: string, item: PersonMenuItemType): boolean {
  return item.fullName.toLowerCase().includes(query.trim().toLowerCase())
}

function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null)
  const [
    selectedPersonItem,
    setSelectedPersonItem
  ] = useState<PersonMenuItemType | null>(mockPersonItems[1])

  return (
    <>
      <GlobalStyle />

      <MenuContainer>
        <Menu
          items={mockPersonItems}
          selectedItem={selectedPersonItem}
          onChange={(item) => {
            console.log('Change event: ', item)
            setSelectedPersonItem(item)
          }}
          isSearchable={true}
          MenuItemComponent={PersonMenuItem}
          filterItem={filterPersonItem}
        />
        <Menu
          items={mockItems}
          selectedItem={selectedItem}
          onChange={(item) => {
            console.log('Change event: ', item)
            setSelectedItem(item)
          }}
          isSearchable={true}
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
