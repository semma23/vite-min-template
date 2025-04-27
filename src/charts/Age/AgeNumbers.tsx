import { Divider, Group, Title } from "@mantine/core"

const AgeNumbers = () => {
    return(<>
        <Group>
            <Title order={2}>
                1200 Fő
            </Title>
            <Divider size="sm" orientation="vertical" />
            <Title order={2}>
                800 Aktív
            </Title>
        </Group>
    </>
    )
}

export default AgeNumbers