import { useEffect, useState } from 'react'
import { MenuItemType } from './Menu'

export function useUpAndDownKeys<ItemType extends MenuItemType>({
  items,
  onChange,
  searchQuery,
  selectedItem
}: {
  selectedItem: ItemType | null
  items: Array<ItemType>
  onChange: (selectedItem: ItemType | null) => void
  searchQuery: string
}) {
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  useEffect(() => {
    setHighlightedIndex(-1)
  }, [searchQuery])

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => {
        if (items.length - 1 === prevIndex) return 0

        return prevIndex + 1
      })
    }

    if (event.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) => {
        if (prevIndex === -1 || (prevIndex === 0 && items.length > 1)) {
          return items.length - 1
        }

        return prevIndex - 1
      })
    }

    if (event.key === 'Enter') {
      if (highlightedIndex === -1) return

      const highlightedItem = items[highlightedIndex]
      const isSelected =
        selectedItem &&
        highlightedItem &&
        highlightedItem.value === selectedItem.value

      if (highlightedItem && !isSelected) {
        onChange(highlightedItem)
      }
    }
  }

  return {
    highlightedIndex,
    inputProps: {
      onKeyDown: handleKeyDown,
      onBlur: () => setHighlightedIndex(-1)
    }
  } as const
}
