export default function CountryCurrency({ currencies }) {
    const currencyList = currencies
        ? Object.values(currencies)
        : []

    return (
        <div>
            <h3>Currencies</h3>

            {currencyList.length > 0 ? (
                currencyList.map(currency => (
                    <p key={currency.name}>
                        {currency.name} ({currency.symbol})
                    </p>
                ))
            ) : (
                <p>No currency listed</p>
            )}
        </div>
    )
}