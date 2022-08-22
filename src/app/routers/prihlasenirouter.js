const express = require ("express")

const router = express.Router()

const prihlasenicontroller = require ("../controllers/prihlasenicontroller")

router.get("/prihlaseni",prihlasenicontroller.prihlaseni)

router.post("/prihlasovani",prihlasenicontroller.prihlasovani)

module.exports=router