import Alert from 'react-bootstrap/Alert';

function Welcome() {
    return (
        <>
            {[
                'dark',
            ].map((variant) => (
                <Alert className="text-center m-3" key={variant} variant={variant}>
                    Benvenuti in{' '}
                    <Alert.Link className="text-decoration-none fs-4" href="#">EpiBooks</Alert.Link><span className="fw-bold fs-3"> !!!</span>
                </Alert>
            ))}
            <div className="text-center">
                <h1>Benvenuti in EpiBooks!</h1>
            </div>
        </>
    );
}

export default Welcome;