
"use client";

import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function DangerAlert({children}) {
    return (
        <Alert color="failure" icon={HiInformationCircle}>
            <h2 className="text-3xl">{children}</h2>
            <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
        </Alert>
    );
}
