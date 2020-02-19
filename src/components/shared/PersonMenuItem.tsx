import React from 'react'
import styled, { css } from 'styled-components'

import { MenuItemProps, MenuItemType } from './menu'
import productBoardIconSrc from '../../assets/svg/product_board.svg'

export interface PersonMenuItemType extends MenuItemType {
  avatarUrl: string
  fullName: string
  jobTitle: string
}

type Props = MenuItemProps<PersonMenuItemType>

function PersonMenuItem(props: Props) {
  const { item, isSelected, onClick, isHighlighted } = props
  return (
    <Container
      isSelected={isSelected}
      onClick={onClick}
      isHighlighted={isHighlighted}
    >
      <Inner>
        <LogoBlock>
          <LogoContainer>
            <img src={productBoardIconSrc} alt="" />
          </LogoContainer>
          <AvatarContainer>
            <img src={item.avatarUrl} alt="" />
          </AvatarContainer>
        </LogoBlock>
        <Name>{item.fullName}</Name>
        <JobTitle>{item.jobTitle}</JobTitle>
      </Inner>
    </Container>
  )
}

const Name = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #192533;
`

const JobTitle = styled.span`
  margin-left: 8px;
  color: #60789a;
  font-size: 12px;
  line-height: 20px;
`

const Container = styled.li<{ isSelected: boolean; isHighlighted: boolean }>`
  width: 270px;

  height: 40px;
  padding: 8px 20.5px;
  cursor: pointer;

  ${(props) =>
    props.isSelected
      ? css`
          background-color: #1e75d8;
          color: white;
          cursor: default;

          ${Name} {
            color: white;
          }
          ${JobTitle} {
            color: #d1e3f8;
          }
        `
      : props.isHighlighted
      ? css`
          background-color: #6fa8ff;
          color: white;
          cursor: default;

          ${Name} {
            color: white;
          }
          ${JobTitle} {
            color: #d1e3f8;
          }
        `
      : css`
          &:hover {
            background-color: #f5f9ff;
          }
        `}
`

const Inner = styled.div`
  display: flex;
  align-items: center;
`

const LogoBlock = styled.div`
  position: relative;
  width: 36px;
  height: 24px;
  margin-right: 12px;
`

const LogoContainer = styled.div`
  position: absolute;
  left: 0;
  height: 24px;
  width: 24px;

  img {
    width: 100%;
    height: 100%;
  }
`
const AvatarContainer = styled.div`
  position: absolute;
  left: 14px;
  height: 24px;
  width: 24px;
  padding: 1px;

  img {
    width: 100%;
    height: 100%;
  }
`

export default PersonMenuItem
