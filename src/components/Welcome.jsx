import Alert from 'react-bootstrap/Alert';

function Welcome() {
    return (
        <>
            {[
                'dark',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    This is a {variant} alert with{' '}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                    you like.
                </Alert>
            ))}
            <div className="text-center">
                <h1>Benvenuti in EpiBooks!</h1>
            </div>
        </>
    );
}

export default Welcome;