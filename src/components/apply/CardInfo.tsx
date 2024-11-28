import { useState } from 'react'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'
import { ApplyValues } from '@models/apply'

type CardInfoValues = Pick<ApplyValues, 'isHipass' | 'isMaster' | 'isRf'>

function CardInfo() {
  const [cardInfoValues, setCardInfoValues] = useState({
    isHipass: false,
    isMaster: false,
    isRf: false,
  })

  const { isHipass, isMaster, isRf } = cardInfoValues

  return (
    <div>
      <Button.Group title="해외결제">
        <Button weak={isMaster === false} size="medium">
          Master
        </Button>
        <Button weak={isMaster === true} size="medium">
          국내전용
        </Button>
      </Button.Group>

      <Spacing size={12} />

      <Button.Group title="후불교통기능">
        <Button weak={isRf === true} size="medium">
          신청안함
        </Button>
        <Button weak={isRf === false} size="medium">
          신청
        </Button>
      </Button.Group>

      <Spacing size={12} />

      <Button.Group title="후불하이패스카드">
        <Button weak={isHipass === true} size="medium">
          신청안함
        </Button>
        <Button weak={isHipass === false} size="medium">
          신청
        </Button>
      </Button.Group>
    </div>
  )
}

export default CardInfo
