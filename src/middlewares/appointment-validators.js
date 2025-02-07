import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { appointmentExits } from "../helpers/db-validators.js";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const cancelarAppointmentValidator = [
    param("uid").isMongoId().withMessage("No es un ID de cita válido"),
    param("uid").custom(appointmentExits),
    validarCampos,
    handleErrors
]
