(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var HTTP_STATUS_CODES;
    (function (HTTP_STATUS_CODES) {
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["CONTINUE"] = 100] = "CONTINUE";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["OK"] = 200] = "OK";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["CREATED"] = 201] = "CREATED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["ACCEPTED"] = 202] = "ACCEPTED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["NO_CONTENT"] = 204] = "NO_CONTENT";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["RESET_CONTENT"] = 205] = "RESET_CONTENT";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["FOUND"] = 302] = "FOUND";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["SEE_OTHER"] = 303] = "SEE_OTHER";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["USE_PROXY"] = 305] = "USE_PROXY";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["BAD_REQUEST"] = 400] = "BAD_REQUEST";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["FORBIDDEN"] = 403] = "FORBIDDEN";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["CONFLICT"] = 409] = "CONFLICT";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["GONE"] = 410] = "GONE";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["REQUEST_ENTITY_TOO_LARGE"] = 413] = "REQUEST_ENTITY_TOO_LARGE";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["REQUEST_URI_TOO_LONG"] = 414] = "REQUEST_URI_TOO_LONG";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
        HTTP_STATUS_CODES[HTTP_STATUS_CODES["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    })(HTTP_STATUS_CODES || (HTTP_STATUS_CODES = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = HTTP_STATUS_CODES;
});
