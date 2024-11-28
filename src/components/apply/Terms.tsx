import { useCallback, useState, MouseEvent } from 'react'
import Agreement from '@shared/Agreement'
import { 약관목록 } from '@constants/apply'
import FixedBottomButton from '@shared/FixedBottomButton'
import { ApplyValues } from '@models/apply'

function Terms({ onNext }: { onNext: (terms: ApplyValues['terms']) => void }) {
  const [termsAgreement, setTermsAgreement] = useState(() => {
    return 약관목록.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })

  console.log(termsAgreement)

  const handleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      console.log('checked', checked)

      setTermsAgreement((prevTerms) => {
        return Object.keys(prevTerms).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        )
      })
    },
    [],
  )

  const 모든약관의_동의되었는가 = Object.values(termsAgreement).every(
    (동의여부) => 동의여부,
  )

  return (
    <div>
      <Agreement>
        <Agreement.Title
          checked={모든약관의_동의되었는가}
          onChange={handleAllAgreement}
        >
          약관에 모두 동의
        </Agreement.Title>
        {약관목록.map(({ id, title, link }) => (
          <Agreement.Description
            key={id}
            link={link}
            checked={termsAgreement[id]}
            onChange={(_, checked) => {
              setTermsAgreement((prevTerms) => ({
                ...prevTerms,
                [id]: checked,
              }))
            }}
          >
            {title}
          </Agreement.Description>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관동의"
        disabled={모든약관의_동의되었는가 === false}
        onClick={() => {
          onNext(Object.keys(termsAgreement))
        }}
      />
    </div>
  )
}

export default Terms
