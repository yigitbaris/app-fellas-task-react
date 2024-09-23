import FlightInfo from './FlightInfo'

const FlightInfoContainer = ({ flightData }) => {
  // api den gelen 20 flight ı karıştırır ve 2 tanesini döndürür
  const getRandomFlights = (data) => {
    return data
      .sort(() => Math.random() - 0.5) // Shuffle the array
      .slice(0, 2) // Get the first 2 items
  }

  const randomFlights = getRandomFlights(flightData)
  return (
    <div className=' flex  flex-col h-[580px] w-[1100px] items-center justify-center ml-7 mt-5 gap-5 '>
      {randomFlights.map((flight, i) => {
        return <FlightInfo flightData={flight} key={i} /> //dönene 2 adet flight ı bastırır
      })}
    </div>
  )
}
export default FlightInfoContainer
