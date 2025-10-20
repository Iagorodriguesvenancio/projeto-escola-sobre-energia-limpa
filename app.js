const http = require('http')
const url = require('url');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "iagorodvenancio@gmail.com",
        pass: "uite kyxe shgz bsim",
    },
    tls: {
        rejectUnauthorized: false, // ⚠️ Apenas para testes
    },
});


const callback = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.writeHead(201, { 'Content-Type': 'application/json' })

    var rota = url.parse(req.url, true);


    if (rota.pathname === '/teste' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const parsed = body ? JSON.parse(body) : {};
                const msm = parsed.msm || 'sem-msm';
                const email = parsed.email || 'sem-msm';

                const info = await transporter.sendMail({
                    from: "feedback  <iagorodvenancio@gmail.com>",
                    to: "iagorodvenancio@outlook.com",
                    subject: `feedback de ${email}`,
                    html: `<p>${msm}</p>`,
                });

                const info1 = await transporter.sendMail({
                    from: " iagorodvenancio@gmail.com",
                    to: `${email}`,
                    subject: `feedback do site energia limpa`,
                    html: `<p>obrigado pelo feedback</p>`,
                });

                console.log("Message sent:", info.messageId);
                res.end(JSON.stringify({ "mensagem": "Deu certo", messageId: info.messageId }));
            } catch (error) {
                console.error("Error occurred:", error);
                res.end(JSON.stringify({ "mensagem": "Erro ao enviar", error: error.message }));
            }
        });
    } else {

        res.end(JSON.stringify({ "mensagem": "rota invalida" }));
    }
}

const server = http.createServer(callback)
server.listen(3000, () => {
    console.log('Servidor rodando na http://localhost:3000/teste')
})