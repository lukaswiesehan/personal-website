import {sendNotification} from '@/lib/slack'

export const SubmitForm = async (req, res) => {
  try {
    const {honeypot, name, phone} = req.body
    if(honeypot === '') {
      const success = await sendNotification({message: `${name} bittet über das Website-Formular um Rückruf: <tel:${phone.replace(/ /g, '')}|${phone}>`})
      res.status(success ? 200 : 500).json({
        success
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false
    })
  }
}

export default SubmitForm