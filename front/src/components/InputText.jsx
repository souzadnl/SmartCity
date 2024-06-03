import { Input } from "@nextui-org/react";

export default function InputText() {

    return (
        <div className="flex flex-col gap-4">
            <Input type="email" variant="underlined" label="Email" placeholder="Enter your email" />
        </div>
    )
}