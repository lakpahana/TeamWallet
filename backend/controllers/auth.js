//create controller 

export async function verificationRequest(req, res) {
    const { phone } = req.body;
    console.log(phone);
    res.send("Phone number");
}

