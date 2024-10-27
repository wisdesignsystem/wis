import Box from 'remote:self/packages/Box'
import Actions from 'remote:self/Actions'
import Button from 'remote:self/Button'

function Example() {
  return (
    <Box>
      <Box.Header
        title="This is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long description"
        description="This is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long descriptionThis is long description"
        tip="xxx"
      >
        <Box.Action>
          <Actions>
            <Button text="Cancel" size="sm"></Button>
            <Button text="Confirm" size="sm" variant="primary"></Button>
          </Actions>
        </Box.Action>
      </Box.Header>
      <Box.Content>xxx</Box.Content>
      <Box.Footer>
        <Box.Action>
          <Actions>
            <Button text="Cancel" size="sm"></Button>
            <Button text="Confirm" size="sm" variant="primary"></Button>
          </Actions>
        </Box.Action>
      </Box.Footer>
    </Box>
  )
}

export default Example
