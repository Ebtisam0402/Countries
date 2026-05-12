import { useState, useEffect } from 'react'

export default function Main() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading ] = useState(true)
    const [error, setError] = useState("")

    useEffect (() => {

        fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
        .then(res => {
            if(!res.ok) {
                throw Error ("Failed to fetch countries")
            }
            return res.json()
        })
        .then(data => {
            setCountries(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <h1>Loading</h1>
    }

    if(error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <main>
             <h1>Countries</h1>

            {countries.slice(0, 10).map(country => {

                const currencyKeys = country.currencies
                    ? Object.keys(country.currencies)
                    : []

                return (

                    <div key={country.name.common}>

                        <h2>{country.name.common}</h2>

                        <p>
                            <strong>Capital:</strong>
                            {" "}
                            {country.capital?.[0]}
                        </p>

                        <p>
                            <strong>Currencies:</strong>
                            {" "}
                            {currencyKeys.join(", ")}
                        </p>

                    </div>

                )
            })}
        </main>
    )
}