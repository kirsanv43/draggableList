import React, { Component } from 'react';
import styled from 'styled-components';
import { Record } from '../record';

const DraggableContainer = styled.div`
  display: flex;
  position: ${props => (props.absolute ? 'absolute' : 'relative')};
  opacity: ${props => (props.hidden ? 0 : 1)}
  top: ${props => props.top}px;
  justify-content: space-between;
  align-items: center;
  width: 344px;
`;

const DraggableItem = styled.div`
  width: 10px;
  height: 19px;
  background: red;
  margin-top: 17px;
`;

export const Draggable = ({
  onTouchStart,
  onDragStart,
  onDragOver,
  onTouchMove,
  onTouchEnd,
  onDrop,
  absolute,
  hidden,
  index,
  top,
  ...props
}) => (
  <DraggableContainer
    onTouchStart={onTouchStart}
    onDragStart={onDragStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
    onDrop={onDrop}
    onDragOver={onDragOver}
    data-id={props.label}
    data-index={props.index}
    top={top}
    hidden={hidden}
    absolute={absolute}
    draggable
  >
    <Record {...props} />
    <DraggableItem />
  </DraggableContainer>
);