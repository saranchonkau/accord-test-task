import { useEffect, useState } from 'react'

export function useUpAndDownKeys<ItemType>({
  items,
  onChange,
  searchQuery
}: {
  isSearchable?: boolean
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
      if (highlightedIndex !== -1 && items[highlightedIndex]) {
        onChange(items[highlightedIndex])
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
