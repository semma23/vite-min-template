import { Button, Flex, Group, Paper } from "@mantine/core";
import TypeInput from "./TypeInput";
import YearInput from "./YearInput";
import OrganizationalUnitInput from "./OrganizationalUnitInput";

const FilterCard = () => {

    return (
        <Paper shadow="sm" radius="md" withBorder p="xl">
            <Group justify="center" gap="xl" grow>
                <YearInput />
                <TypeInput />
                <OrganizationalUnitInput />
            </Group>
            <Flex justify="center" mt={25}>
                <Button>
                    Elemzés lekérése
                </Button>
            </Flex>
        </Paper>
    )
}

export default FilterCard;