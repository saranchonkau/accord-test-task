import React from 'react'
import styled, { css } from 'styled-components'

export type MenuItemType = { value: string; label: string }

type Props = {
  items: Array<MenuItemType>
  selectedItem: MenuItemType | null
  onChange: (selectedItem: MenuItemType) => void
}

function Menu({ items, selectedItem, onChange }: Props) {
  function handleMenuItemClick(item: MenuItemType) {
    onChange(item)
  }

  return (
    <Container>
      <MenuList>
        {items.map((item) => {
          const isSelected = selectedItem?.value === item.value
          return (
            <MenuItem
              key={item.value}
              isSelected={isSelected}
              onClick={isSelected ? undefined : () => handleMenuItemClick(item)}
            >
              <ItemText>{item.label}</ItemText>
            </MenuItem>
          )
        })}
      </MenuList>
    </Container>
  )
}

const Container = styled.div`
  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  border-radius: 4px;
  border: 1px solid #d1e3f8;
  background: #ffffff;
`

const MenuList = styled.ul`
  margin: 6.5px 0;
`

const MenuItem = styled.li<{ isSelected: boolean }>`
  height: 40px;
  padding: 10px 29.5px 10px 21px;
  cursor: pointer;

  ${(props) =>
    props.isSelected
      ? css`
          background-color: #1e75d8;
          color: white;
          cursor: default;
        `
      : css`
          color: #192533;

          &:hover {
            background-color: #f5f9ff;
          }
        `};
`

const ItemText = styled.span`
  font-size: 14px;
  line-height: 20px;
`

export default Menu
