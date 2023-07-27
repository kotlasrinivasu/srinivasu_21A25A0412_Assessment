
var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'srinivasukotla323@gmail.com',
        pass:'aldstousxhcfolyb'
    }
});
    var mailOptions={
        from:'srinivasukotla323@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending from 21A25A0412',
        text:'good morning sir'
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
        }
        else{
            console.log('email sents'+info.response);
        }
    });
