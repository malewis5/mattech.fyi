// lib/hubspot.js
import axios from 'axios'

export const submit_hubspot_form = async (email) => {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID
  const config = {
    // important!
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await axios.post(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      portalId,
      formGuid,
      fields: [
        {
          name: 'email',
          value: email,
        },
      ],
    },
    config
  )
  return response
}
