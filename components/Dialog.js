import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 300px;
  border: 1px solid #888;
  padding: 20px;
  margin-bottom: 20px;
  position: absolute;
  top: 10%;
  left: 30%;
`

const X = styled.div`
  &:after {
    content: 'X';
  }
  float: right;
  cursor: pointer;
`

export default class Dialog extends React.Component {
  render() {
    const { show } = this.props

    return show && (
      <Box>
        <X className="dialogCloseBtn" onClick={this.props.onHide} />
        { this.props.children() }
      </Box>
    )
  }
}
