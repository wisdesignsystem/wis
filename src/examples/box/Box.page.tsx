import { Actions } from "remote:self/actions";
import {
	Box,
	BoxActions,
	BoxContent,
	BoxFooter,
	BoxHeader,
} from "remote:self/box";
import { Button } from "remote:self/button";

function Example() {
	return (
		<Box>
			<BoxHeader title="Title" description="description" tip="xxx">
				<BoxActions>
					<Actions>
						<Button text="Cancel" size="sm"></Button>
						<Button text="Confirm" size="sm" variant="primary"></Button>
					</Actions>
				</BoxActions>
			</BoxHeader>
			<BoxContent>xxx</BoxContent>
			<BoxFooter>
				<BoxActions>
					<Actions>
						<Button text="Cancel" size="sm"></Button>
						<Button text="Confirm" size="sm" variant="primary"></Button>
					</Actions>
				</BoxActions>
			</BoxFooter>
		</Box>
	);
}

export default Example;
