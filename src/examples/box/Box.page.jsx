import Box from 'remote:self/packages/Box'
import Actions from 'remote:self/Actions'
import Button from 'remote:self/Button'

function Example() {
  return (
    <Box>
      <Box.Header title="Title" description="description" tip="xxx">
        <Box.Actions>
          <Actions>
            <Button text="Cancel" size="sm"></Button>
            <Button text="Confirm" size="sm" variant="primary"></Button>
          </Actions>
        </Box.Actions>
      </Box.Header>
      <Box.Content>xxx</Box.Content>
      <Box.Footer>
        <Box.Actions>
          <Actions>
            <Button text="Cancel" size="sm"></Button>
            <Button text="Confirm" size="sm" variant="primary"></Button>
          </Actions>
        </Box.Actions>
      </Box.Footer>
    </Box>
  )
}

export default Example
