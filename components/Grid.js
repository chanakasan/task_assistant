import React from 'react';
import styled from 'styled-components';
import Dialog from './Dialog';

const Box = styled.div`
  width: 240px;
  border: 1px solid #888;
  padding: 20px;
  margin-bottom: 20px;
`

const BaseRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

const Row = BaseRow.extend`
  &:hover {
    background: #eee;
    cursor: pointer;
  }
`

const HeaderRow = BaseRow.extend`
  ${Cell} {
    font-weight: 600;
    border-bottom: 1px solid #888;
  }
`
const FooterRow = BaseRow.extend`
  margin: 20px 0 0 0;
  font-weight: normal;
`

const Cell = styled.div`
  flex-basis: 200px;
`

const tasks = [
  {
    name: 'code katas',
    notes: 'fibonacci, roman numerals etc',
  },
  {
    name: 'read POODR',
    notes: 'one chapter a day',
  }
]

export class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks,
      selected: null,
    }
    this.dialogBodyHtml = this.dialogBodyHtml.bind(this)
  }

  render() {
    const { tasks, selected } = this.state
    console.log("[DEBUG] selected =", selected)

    return (
      <Box className={this.props.className}>
        <div>
          <HeaderRow>
            <Cell>Tasks</Cell>
          </HeaderRow>
          {
            tasks.map((t, index) => (
              <Row className="gridRow" key={index} onClick={(e) => this.setState({ selected: t }) } >
                <Cell>{ t.name }</Cell>
              </Row>
            ))
          }
          <FooterRow>
            { tasks.length + ' of ' + tasks.length }
          </FooterRow>
        </div>

        <Dialog show={!!selected} onHide={() => this.setState({ selected: null })}>
          { () => this.dialogBodyHtml(selected) }
        </Dialog>
      </Box>
    )
  }

  dialogBodyHtml(selected) {
    return <div>
      <p>{ selected.name }</p>
      <p>{ selected.notes }</p>
    </div>
  }
}

const StyledGrid = styled(Grid)``

export default StyledGrid
