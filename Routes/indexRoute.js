const express = require("express")
const router = express.Router()

router.get("", (req, res) => {
    res.send
        ("Express Template",
            "Git Repo: https://github.com/blanck1945/express_template.git")

})

module.exports = router;