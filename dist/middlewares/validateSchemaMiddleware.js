import httpStatus from "http-status";
export default function validateSchemaMiddleware(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body);
        if (validation.error) {
            return res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY).send({
                error: validation.error.message
            });
        }
        next();
    };
}
