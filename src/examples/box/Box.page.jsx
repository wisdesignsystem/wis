import Box from 'remote:self/packages/Box'
import Actions from 'remote:self/Actions'
import Button from 'remote:self/Button'
import { StarIcon } from '@wisdesign/lsicon'

function Example() {
  return (
    <Box icon={<StarIcon />} title="Page Title" description="this is a long description" closeable collapsible>
      <Actions>
        <Button text="Cancel" size="sm"></Button>
        <Button text="Confirm" size="sm" variant="primary"></Button>
      </Actions>
    </Box>
  )
}

export default Example
