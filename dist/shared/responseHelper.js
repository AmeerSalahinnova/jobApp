"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHelper = void 0;
const Status = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNSUPPORTED_ACTION: 405,
    VALIDATION_FAILED: 422,
    SERVER_ERROR: 500,
};
function statusMessage(status) {
    switch (status) {
        case Status.BAD_REQUEST:
            return "Bad Request";
        case Status.CREATED:
            return "Created";
        case Status.UNAUTHORIZED:
            return "Unauthorized";
        case Status.FORBIDDEN:
            return "Forbidden";
        case Status.NOT_FOUND:
            return "Not Found";
        case Status.UNSUPPORTED_ACTION:
            return "Unsupported Action";
        case Status.VALIDATION_FAILED:
            return "Validation Failed";
        case Status.SERVER_ERROR:
            return "Internal Server Error";
        default:
            return "";
    }
}
function jsonResponse(response, body, responseOptions) {
    const options = responseOptions || {};
    options.status = options.status || Status.OK;
    response.status(options.status).json(body || null);
}
exports.responseHelper = {
    ok(request, response, data, message) {
        const userPayload = response.locals.userPayLoad;
        const body = {
            status: "success",
            message: message || statusMessage(Status.OK),
            userPayload,
            data,
        };
        jsonResponse(response, body, {
            status: Status.OK,
        });
    },
    created(request, response, data, message) {
        const body = {
            status: "success",
            message,
            data,
        };
        jsonResponse(response, body, {
            status: Status.CREATED,
        });
    },
    badRequest(request, response, data, message) {
        const body = {
            status: "error",
            message: message || statusMessage(Status.BAD_REQUEST),
            data,
        };
        jsonResponse(response, body, {
            status: Status.BAD_REQUEST,
        });
    },
    unauthorized(request, response, data, message) {
        const body = {
            status: "error",
            message: message || statusMessage(Status.UNAUTHORIZED),
            data,
        };
        jsonResponse(response, body, {
            status: Status.UNAUTHORIZED,
        });
        console.log("5ra");
    },
    forbidden(request, response, data, message) {
        const body = {
            status: "error",
            data,
            message: message || statusMessage(Status.FORBIDDEN),
        };
        jsonResponse(response, body, {
            status: Status.FORBIDDEN,
        });
    },
    notFound(request, response, data, message) {
        const body = {
            status: "error",
            data,
            message: message || statusMessage(Status.NOT_FOUND),
        };
        jsonResponse(response, body, {
            status: Status.NOT_FOUND,
        });
    },
    unsupportedAction(request, response, data, message) {
        const body = {
            status: "error",
            data,
            message: message || statusMessage(Status.UNSUPPORTED_ACTION),
        };
        jsonResponse(response, body, {
            status: Status.UNSUPPORTED_ACTION,
        });
    },
    invalid(request, response, data, message) {
        const body = {
            status: "error",
            data,
            message: message || statusMessage(Status.VALIDATION_FAILED),
        };
        jsonResponse(response, body, {
            status: Status.VALIDATION_FAILED,
        });
    },
    serverError(request, response, data, message) {
        let errData = {};
        if (data instanceof Error) {
            errData = {
                message: data.message || message,
                stacktrace: data.stack,
            };
        }
        const body = {
            status: "error",
            message: statusMessage(Status.SERVER_ERROR),
            errData,
        };
        jsonResponse(response, body, {
            status: Status.SERVER_ERROR,
        });
    },
};
//# sourceMappingURL=responseHelper.js.map