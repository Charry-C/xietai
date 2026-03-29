import nodemailer from 'nodemailer'
import type { H3Event } from 'h3'

interface EmailBody {
  to: string
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  products?: string[]
}

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody<EmailBody>(event)

  const { firstName, lastName, email, subject, message, to, products } = body

  if (!firstName || !email || !subject || !message || !to) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  // 163 邮箱 SMTP 配置
  const smtpUser = process.env.SMTP_USER // 你的163邮箱
  const smtpPass = process.env.SMTP_PASS // 163邮箱授权码（不是密码）

  if (!smtpUser || !smtpPass) {
    throw createError({
      statusCode: 500,
      statusMessage: 'SMTP configuration missing',
    })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${smtpUser}>`,
    replyTo: email,
    to,
    subject: `[网站留言] ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
        <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1a3a5c; margin-bottom: 20px; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">
            网站新留言
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 100px;">姓名:</td>
              <td style="padding: 10px 0; color: #333; font-weight: bold;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;">邮箱:</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #c5a059;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;">主题:</td>
              <td style="padding: 10px 0; color: #333;">${subject}</td>
            </tr>
          </table>
          ${
            products && products.length > 0
              ? `
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; margin-bottom: 10px;">感兴趣的产品:</p>
            <ul style="margin: 0; padding-left: 20px; color: #333;">
              ${products.map((p: string) => `<li style="padding: 5px 0;">${p}</li>`).join('')}
            </ul>
          </div>
          `
              : ''
          }
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; margin-bottom: 10px;">留言内容:</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; color: #333; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
          此邮件来自网站联系表单
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email sent successfully' }
  } catch (error) {
    console.error('Email send error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
    })
  }
})
