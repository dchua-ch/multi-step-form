import { ReactNode, Suspense } from "react";

interface LoadWithSuspenseProps {
    children: ReactNode;
}

const LoadWithSuspense = (props : LoadWithSuspenseProps) => {
    return <Suspense fallback="loading...">{props.children}</Suspense>;
};

export default LoadWithSuspense;
