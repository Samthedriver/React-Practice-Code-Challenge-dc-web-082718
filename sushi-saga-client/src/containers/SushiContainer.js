import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <div className="belt">
      <Fragment>
        {
          props.sushiToRender.map(sushiObj => {
            return (
              <Sushi
                key={sushiObj.id}
                sushiObj={sushiObj}
                eatThisSushi={props.eatThisSushi}
                eatenSushi={props.eatenSushi}
                moneyLeft={props.moneyLeft}
              />
            )
          })
        }


      <MoreButton nextFourSushi={props.nextFourSushi}/>
      </Fragment>
    </div>
  )

}

export default SushiContainer
