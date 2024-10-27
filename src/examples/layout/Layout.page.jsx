import Page from 'remote:self/Page'
import { Main, Left, Right, Top, Bottom } from 'remote:self/Layout'
import Actions from 'remote:self/Actions'
import Button from 'remote:self/Button'

function Example() {
  return (
    <Page title="Page title" description="description of page content" tip="xxx">
      <Actions>
        <Button text="Edit"></Button>
        <Button text="Save" variant="primary"></Button>
      </Actions>

      <Top>Top Content</Top>
      <Left title="Left Title">
        Left Content
        <Actions>
          <Button text="Cancel" size="sm"></Button>
          <Button text="Confirm" size="sm" variant="primary"></Button>
        </Actions>
      </Left>
      <Main title="Main Title">
        <Top>Inner Top Content</Top>
        <Left>Inner Left Content</Left>
        <div style={{ height: '2000px' }}>Main Content</div>
        <Right>Inner Right Content</Right>
        <Bottom>Inner Bottom Content</Bottom>
      </Main>
      <Right title="Right Title" description="description of right content">
        <Top>Right Top Content</Top>
        Right Content
        <Bottom>Right Bottom Content</Bottom>
      </Right>
      <Bottom title="Bottom Title">
        <Actions>
          <Button text="Cancel" size="sm"></Button>
          <Button text="Confirm" size="sm" variant="primary"></Button>
        </Actions>
        Bottom Content
      </Bottom>
    </Page>
  )
}

export default Example
