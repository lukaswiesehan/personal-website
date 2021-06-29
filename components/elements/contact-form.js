import {useRef, useState} from 'react'
import Link from 'next/link'
import {Input} from '@/components/elements/input'
import {Checkbox} from '@/components/elements/checkbox'
import {Submit} from '@/components/elements/submit'

export const ContactForm = () => {
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const privacyRef = useRef(null)
  const honeypotRef = useRef(null)

  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [privacyError, setPrivacyError] = useState(false)

  const [formState, setFormState] = useState(false)

  const validateName = () => {
    if(nameRef.current.value == '') {
      setNameError(true)
      return false
    } else if(!nameRef.current.value.includes(' ')) {
      setNameError(true)
      return false
    } else {
      setNameError(false)
      return true
    }
  }

  const validatePhone = () => {
    const re = /^[0-9 ()+-]+$/
    if(phoneRef.current.value == '') {
      setPhoneError(true)
      return false
    } else if(!re.test(phoneRef.current.value)) {
      setPhoneError(true)
      return false
    } else {
      setPhoneError(false)
      return true
    }
  }

  const validatePrivacy = () => {
    if(!privacyRef.current.checked) {
      setPrivacyError(true)
      return false
    } else {
      setPrivacyError(false)
      return true
    }
  }

  const validateAll = () => {
    const nameSuccess = validateName()
    const phoneSuccess = validatePhone()
    const privacySuccess = validatePrivacy()
    return nameSuccess && phoneSuccess && privacySuccess
  }

  const clearForm = () => {
    nameRef.current.value = ''
    phoneRef.current.value = ''
    privacyRef.current.checked = false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(validateAll()) {
      setFormState('loading')
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          honeypot: honeypotRef.current.value,
          name: nameRef.current.value,
          phone: phoneRef.current.value,
        })
      })
      const {success} = await response.json()
      if(success) {
        clearForm()
        setFormState('success')
      } else {
        setFormState('error')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="password" tabIndex="-1" autoComplete="off" ref={honeypotRef} className="hidden"/>
      <div>
        <label htmlFor="name" hidden>Dein Name</label>
        <Input id="name" type="text" placeholder="Dein Name" error={nameError} onBlur={validateName} ref={nameRef}/>
      </div>
      <div>
        <label htmlFor="phone" hidden>Deine Telefonnummer</label>
        <Input id="phone" type="text" placeholder="Deine Telefonnummer" error={phoneError} onBlur={validatePhone} ref={phoneRef}/>
      </div>
      <div className="flex space-x-3">
        <Checkbox id="privacy" error={privacyError} onBlur={validatePrivacy} ref={privacyRef} className="flex-grow"><Link href="/privacy"><a className="underline">Datenschutzerklärung</a></Link> gelesen.</Checkbox>
        <Submit loading={formState == 'loading'} success={formState == 'success'} error={formState == 'error'}/>
      </div>
    </form>
  )
}