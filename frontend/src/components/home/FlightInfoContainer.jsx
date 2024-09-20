import FlightInfo from './FlightInfo'

const FlightInfoContainer = ({ flightData }) => {
  return (
    <div className=' flex  flex-col h-[580px] w-[1100px] items-center justify-center ml-7 mt-5 gap-5 '>
      {flightData.map((flight, i) => {
        if (i < 2) return <FlightInfo flightData={flight} key={i} />
        return
      })}
    </div>
  )
}
export default FlightInfoContainer
