import { NativeSelect } from "@mantine/core";
import { IconChevronDown, IconHash } from "@tabler/icons-react";
import { useState } from "react";

const OrganizationalUnitInput = () => {
    const [value, setValue] = useState('');

    return (
        <NativeSelect 
            leftSection={<IconHash size={16} />}
            leftSectionPointerEvents="none"
            rightSection={<IconChevronDown size={16} />}
            label="Szervezeti egység" 
            description="Input description" 
            data={['Pannon Egyetem', 'MIK', 'GTK']} 
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            radius="md"
        />
    )
}

export default OrganizationalUnitInput;