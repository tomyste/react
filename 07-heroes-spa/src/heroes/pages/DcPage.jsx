import { HeroList } from "../components/HeroList"

export const DcPage = () => {
  return (
    
    <>
      <h1 className="mt-2" >DC comics</h1>
      <hr/>
      <HeroList publisher={'DC Comics'}></HeroList>
    </>
  )
}
