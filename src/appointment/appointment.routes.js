import { Router } from "express"
import { saveAppointment, cancelarAppointment, updateCita } from "./appointment.controller.js"
import { cancelarAppointmentValidator, createAppointmentValidator } from "../middlewares/appointment-validators.js"

const router = Router()

router.post("/createAppointment", createAppointmentValidator, saveAppointment)
router.delete("/cancelarAppointment/:uid", cancelarAppointmentValidator, cancelarAppointment)
router.patch("/updateCita/:uid",updateCita) 

export default router