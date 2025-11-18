import Alert from 'react-bootstrap/Alert';

function Welcome() {
    return (
        <>
            {[
                'dark',
            ].map((variant) => (
                <Alert className="text-center m-3 fs-5" key={variant} variant={variant}>
                    Sconti {' '}
                    <Alert.Link className="text-decoration-none fs-4" href="#">fino al 40% </Alert.Link>
                    dal 20 novembre al 20 dicembre.<span className="fw-bold fs-3"> Affrettati !!!</span>
                </Alert>
            ))}
            <div className="text-center">
                <h1>Benvenuti in EpiBooks!</h1>
            </div>
        </>
    );
}

export default Welcome;