import { Group, Paper } from "@mantine/core";
import TypeInput from "./TypeInput";
import YearInput from "./YearInput";

const FilterCard = () => {

    return (
        <Paper shadow="sm" radius="md" withBorder p="xl">
            <Group justify="center" gap="xl" grow>
                <YearInput />
                <TypeInput />
            </Group>
        </Paper>
    )
}

export default FilterCard;