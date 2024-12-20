import { useCallback, useState, MouseEvent } from 'react'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'
import { ApplyValues } from '@models/apply'
import FixedBottomButton from '@shared/FixedBottomButton'

type CardInfoValues = Pick<ApplyValues, 'isHipass' | 'isMaster' | 'isRf'>

function CardInfo({
  onNext,
}: {
  onNext: (cardInfoValues: CardInfoValues) => void
}) {
  const [cardInfoValues, setCardInfoValues] = useState({
    isHipass: false,
    isMaster: false,
    isRf: false,
  })

  const { isHipass, isMaster, isRf } = cardInfoValues

  const handleButtonClik = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const $button = e.target as HTMLButtonElement

    console.log($button.dataset.value)
    console.log($button.name)

    setCardInfoValues((prevValues) => ({
      ...prevValues,
      [$button.name]: JSON.parse($button.dataset.value as string),
    }))
  }, [])

  console.log(cardInfoValues, 'cardInfoValues')

  return (
    <div>
      <Button.Group title="해외결제">
        <Button
          name="isMaster"
          weak={isMaster === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClik}
        >
          Master
        </Button>
        <Button
          name="isMaster"
          weak={isMaster === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClik}
        >
          국내전용
        </Button>
      </Button.Group>

      <Spacing size={12} />

      <Button.Group title="후불교통기능">
        <Button
          name="isRf"
          weak={isRf === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClik}
        >
          신청안함
        </Button>
        <Button
          name="isRf"
          weak={isRf === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClik}
        >
          신청
        </Button>
      </Button.Group>

      <Spacing size={12} />

      <Button.Group title="후불하이패스카드">
        <Button
          name="isHipass"
          weak={isHipass === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClik}
        >
          신청안함
        </Button>
        <Button
          name="isHipass"
          weak={isHipass === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClik}
        >
          신청
        </Button>
      </Button.Group>

      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(cardInfoValues)
        }}
      />
    </div>
  )
}

export default CardInfo
