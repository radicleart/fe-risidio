import SibApiV3Sdk from 'sib-api-v3-sdk'

SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = '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'

function sendAEmail (subject, sender, to, content) {
  new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
    {
      subject: subject,
      sender: { email: 'api@sendinblue.com', name: 'Sendinblue' },
      replyTo: { email: to, name: sender },
      to: [{ name: 'Risidio', email: 'info@risidio.com' }],
      htmlContent: '<html><body><p>{{params.bodyMessage}}</h1></body></html>',
      params: { bodyMessage: content }
    }
  ).then(function (data) {
    console.log(data)
  }, function (error) {
    console.error(error)
  })
}

export default sendAEmail
