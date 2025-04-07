import { NativeSelect } from "@mantine/core";
import { IconChevronDown, IconHash } from "@tabler/icons-react";
import { useState } from "react";

const TypeInput = () => {
    const [value, setValue] = useState('');

    return (
        <NativeSelect 
            leftSection={<IconHash size={16} />}
            leftSectionPointerEvents="none"
            rightSection={<IconChevronDown size={16} />}
            label="Input label" 
            description="Input description" 
            data={['Éves', 'Féléves', 'Negyedéves']} 
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            radius="md"
        />
    )
}

export default TypeInput;