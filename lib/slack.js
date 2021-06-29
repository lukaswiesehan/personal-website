const endpoint = 'https://slack.com/api/chat.postMessage'
const token = process.env.SLACK_API_KEY
const channel = process.env.SLACK_CHANNEL_ID

export const sendNotification = async ({message}) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      channel,
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": message
          }
        }
      ]
    })
  })
  const {ok} = await response.json()
  return ok
}