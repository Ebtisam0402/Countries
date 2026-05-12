import { useState, useEffect } from 'react'
import CountryItem from "./CountryItem"

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
        return <h2>Loading countries</h2>
    }

    if(error) {
        return <h2>Error: {error}</h2>
    }

    return (
        <main>
          {countries.slice(0, 10).map(country => (
                <CountryItem 
                    key={country.name.common}
                    country={country}
                />
            ))}
        </main>
    )
}