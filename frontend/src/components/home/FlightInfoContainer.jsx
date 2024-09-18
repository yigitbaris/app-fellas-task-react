import FlightInfo from './FlightInfo'

const FlightInfoContainer = () => {
  return (
    <div className=' flex  flex-col h-[580px] w-[1100px] items-center justify-center ml-7 mt-5 gap-5 '>
      <FlightInfo />
      <FlightInfo />
    </div>
  )
}
export default FlightInfoContainer
