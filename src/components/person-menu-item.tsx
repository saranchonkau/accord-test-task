import React from 'react'
import styled, { css } from 'styled-components'

import { MenuItemProps, MenuItemType } from './Menu'
import productBoardSrc from '../assets/images/productboard.png'

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
      data-menu-item
    >
      <Inner>
        <LogoBlock>
          <LogoContainer>
            <img src={productBoardSrc} alt="" />
          </LogoContainer>
          <AvatarContainer>
            <img src={item.avatarUrl} alt="" />
          </AvatarContainer>
        </LogoBlock>
        <TextContainer>
          <Name>
            {item.fullName} <JobTitle>{item.jobTitle}</JobTitle>
          </Name>
        </TextContainer>
      </Inner>
    </Container>
  )
}

const Name = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: #192533;
`

const JobTitle = styled.span`
  display: inline-block;
  margin-left: 8.5px;
  color: #60789a;
  font-size: 12px;
  line-height: 18px;
`

const Container = styled.li<{ isSelected: boolean; isHighlighted: boolean }>`
  width: 268px;

  padding: 8px 20.5px 8px 20.5px;
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
`

const LogoBlock = styled.div`
  position: relative;
  flex: 0 0 36px;
  width: 36px;
  height: 24px;
  margin-right: 11px;
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
  left: 13px;
  top: 0.5px;
  height: 24px;
  width: 24px;
  padding: 1px;

  img {
    width: 100%;
    height: 100%;
  }
`

const TextContainer = styled.div`
  overflow: hidden;
`

export default PersonMenuItem
