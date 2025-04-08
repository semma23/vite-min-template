import { Card, Title, Flex } from "@mantine/core"
import { IconFriends } from "@tabler/icons-react"

const AgeNumbers = () => {
    return(<>
        <Card shadow="md" withBorder radius="md" h={195} mb={5}>
            <Card.Section p={10}>
                <Title order={5}><IconFriends stroke={2} />Létszám</Title>
            </Card.Section>
            <Flex
                p={10}
                gap="md"
                justify="center"
                align="center"
                direction="column"
            >
                <Title order={2}>
                    1200 Fő
                </Title>
            </Flex>
        </Card>
        <Card shadow="md" withBorder radius="md" h={195} mt={5}>
        <Card.Section p={10}>
            <Title order={5}><IconFriends stroke={2} /> Átlagéletkor</Title>
        </Card.Section>
        <Flex
            p={10}
            gap="md"
            justify="center"
            align="center"
            direction="column"
        >
            <Title order={2}>
                45 év
            </Title>
        </Flex>
    </Card>
    </>
    )
}

export default AgeNumbers