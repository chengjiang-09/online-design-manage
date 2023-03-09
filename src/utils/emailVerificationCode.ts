import nodemailer from 'nodemailer'
import config from '../configs/config'

//发送邮件验证码
export const sendVerificationCode = (email: string, code: string) => {    
    const transporter = nodemailer.createTransport({
        host: "smtp.163.com",
        port: 25,
        secure: false,
        auth: {
            user: config.smtp.smpt_user,
            pass: config.smtp.smpt_password
        },
    })

    const mailOptions  = {
        from: '"online-design" <chengjiang_09@163.com>', // 发送者昵称和地址
        to: email, // 接收者的邮箱地址
        subject: '登录验证码', // 邮件主题
        html: `<h1>验证码：${code}</h1>`
    }

    return transporter.sendMail(mailOptions)
}