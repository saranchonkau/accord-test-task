import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import './assets/css/global.css'
import Menu, { MenuItemType } from './components/menu'
import PersonMenuItem, {
  PersonMenuItemType
} from './components/person-menu-item'
import { MOCK_ITEMS, MOCK_PERSON_ITEMS } from './constants/mocks'

function App() {
  const [isSimpleMenuVisible, setSimpleMenuVisible] = useState(true)

  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null)
  const [
    selectedPersonItem,
    setSelectedPersonItem
  ] = useState<PersonMenuItemType | null>(null)

  function filterPersonItem(query: string, item: PersonMenuItemType): boolean {
    return item.fullName.toLowerCase().includes(query.trim().toLowerCase())
  }

  return (
    <MenuContainer>
      <CheckBoxContainer>
        <label>
          <input
            type="checkbox"
            checked={isSimpleMenuVisible}
            onChange={(event) => setSimpleMenuVisible(event.target.checked)}
          />
          Display simple menu
        </label>
      </CheckBoxContainer>
      {isSimpleMenuVisible ? (
        <Menu
          items={MOCK_ITEMS}
          selectedItem={selectedItem}
          onChange={(item) => {
            console.log('Change event: ', item)
            setSelectedItem(item)
          }}
        />
      ) : (
        <PersonMenuContainer>
          <Menu
            items={MOCK_PERSON_ITEMS}
            selectedItem={selectedPersonItem}
            onChange={(item) => {
              console.log('Change event: ', item)
              setSelectedPersonItem(item)
            }}
            isSearchable={true}
            MenuItemComponent={PersonMenuItem}
            filterItem={filterPersonItem}
          />
        </PersonMenuContainer>
      )}
    </MenuContainer>
  )
}

const CheckBoxContainer = styled.div`
  margin-bottom: 30px;
`

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PersonMenuContainer = styled.div`
  [data-menu-list] {
    margin: 9.5px 0 9.5px 0;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
