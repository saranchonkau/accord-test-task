import React from 'react'
import styled from 'styled-components'

type Props = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> & {
  value: string
  onChange: (newValue: string) => void
  placeholder?: string
  children?: React.ReactNode
}

function SearchInput({
  value,
  onChange,
  placeholder = 'Filter by name',
  ...inputProps
}: Props) {
  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        {...inputProps}
        autoFocus={true}
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 15.5px 22px 13px 21px;
  border-bottom: 1px solid #deecfc;
`

const Input = styled.input`
  display: block;
  color: #192533;
  font-size: 14px;
  line-height: 20px;

  outline: none;
  border: 0;

  &::placeholder {
    color: #8299b6;
    letter-spacing: 0.25px;
  }
`

export default SearchInput
