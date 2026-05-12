import CountryName from "./CountryName"
import CountryCurrency from "./CountryCurrency"

export default function CountryItem({ country }) {
    return (
        <div className="country-card">
            <CountryName
            name={country.name.common}
            capital={country.capital?.[0]}
            />

            <CountryCurrency 
                currencies={country.currencies}
                />

        </div>
    )
}