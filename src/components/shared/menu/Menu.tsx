import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import SearchInput from './components/SearchInput'

import { useUpAndDownKeys } from './Menu.hooks'

function defaultFilterItem<ItemType extends MenuItemType>(
  query: string,
  item: ItemType
): boolean {
  return (item.label ?? '').toLowerCase().includes(query.trim().toLowerCase())
}

export interface MenuItemType {
  value: string
  label?: string
}

export type MenuItemProps<Item extends MenuItemType = MenuItemType> = {
  item: Item
  isSelected: boolean
  isHighlighted: boolean
  onClick: () => void
}

type Props<ItemType extends MenuItemType> = {
  className?: string
  items: Array<ItemType>
  selectedItem: ItemType | null
  onChange: (selectedItem: ItemType | null) => void
  isSearchable?: boolean
  MenuItemComponent?: (props: MenuItemProps<ItemType>) => JSX.Element
  filterItem?: (query: string, item: ItemType) => boolean
}

function Menu<ItemType extends MenuItemType = MenuItemType>({
  className,
  items,
  selectedItem,
  onChange,
  isSearchable,
  MenuItemComponent,
  filterItem = defaultFilterItem
}: Props<ItemType>) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = items.filter((item) => filterItem(searchQuery, item))

  const { highlightedIndex, inputProps } = useUpAndDownKeys({
    isSearchable,
    items: filteredItems,
    onChange,
    searchQuery
  })

  useEffect(() => {
    const isSelectedItemAbsent =
      selectedItem &&
      !filteredItems.some((item) => item.value === selectedItem.value)

    if (isSelectedItemAbsent) {
      onChange(null)
    }
  }, [filteredItems, onChange, selectedItem])

  function renderMenuItem(item: ItemType, index: number) {
    const isSelected = selectedItem?.value === item.value
    const isHighlighted = highlightedIndex === index

    function onItemClick() {
      if (isSelected) return
      onChange(item)
    }

    if (MenuItemComponent) {
      return (
        <MenuItemComponent
          key={item.value}
          isSelected={isSelected}
          item={item}
          onClick={onItemClick}
          isHighlighted={isHighlighted}
        />
      )
    } else {
      return (
        <MenuItem
          key={item.value}
          isSelected={isSelected}
          isHighlighted={isHighlighted}
          onClick={onItemClick}
        >
          <ItemText>{item.label}</ItemText>
        </MenuItem>
      )
    }
  }

  return (
    <Container className={className}>
      {isSearchable && (
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          {...inputProps}
        />
      )}
      <MenuList>
        {filteredItems.length > 0 ? (
          filteredItems.map(renderMenuItem)
        ) : (
          <MenuItem>
            <ItemText>Not found</ItemText>
          </MenuItem>
        )}
      </MenuList>
    </Container>
  )
}

const Container = styled.div`
  box-shadow: 0 4px 12px rgba(107, 133, 163, 0.06),
    0 4px 16px rgba(50, 132, 225, 0.16);
  border-radius: 4px;
  border: 1px solid #d1e3f8;
  background: #ffffff;
`

const MenuList = styled.ul`
  margin: 6.5px 0;
`

const MenuItem = styled.li<{ isSelected?: boolean; isHighlighted?: boolean }>`
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
      : props.isHighlighted
      ? css`
          background-color: #6fa8ff;
          color: white;
          cursor: default;
        `
      : css`
          color: #192533;

          &:hover {
            background-color: #f5f9ff;
          }
        `}
`

const ItemText = styled.span`
  font-size: 14px;
  line-height: 20px;
`

export default Menu
