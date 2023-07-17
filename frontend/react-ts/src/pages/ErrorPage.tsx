interface ErrorPageProps {
    message: string
}

export const ErrorPage = (props: ErrorPageProps) => {
    return (
        <>
            <h1>{props.message}</h1>
        </>
    )
}
