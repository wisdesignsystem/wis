import { Actions } from "wis/actions";
import { Box, BoxActions, BoxContent, BoxFooter, BoxHeader } from "wis/box";
import { Button } from "wis/button";

function Example() {
  return (
    <Box>
      <BoxHeader title="Title" description="description">
        <BoxActions>
          <Actions>
            <Button text="Cancel" size="sm" />
            <Button text="Confirm" size="sm" variant="primary" />
          </Actions>
        </BoxActions>
      </BoxHeader>
      <BoxContent>xxx</BoxContent>
      <BoxFooter>
        <BoxActions>
          <Actions>
            <Button text="Cancel" size="sm" />
            <Button text="Confirm" size="sm" variant="primary" />
          </Actions>
        </BoxActions>
      </BoxFooter>
    </Box>
  );
}

export default Example;
