window.I18n = (function(u) {
    function f(k) {
        var m;
        if (typeof k === 'object') {
            for (var i = 0, l = k.length; i < l && f.messages[k[i]] === u; ++i);
            m = f.messages[k[i]] || k[0]
        } else {
            m = ((f.messages[k] !== u) ? f.messages[k] : k)
        }
        for (i = 1; i < arguments.length; i++) {
            m = m.replace('{' + (i - 1) + '}', arguments[i])
        }
        return m
    };
    f.messages = {
        "overloaded": "Mocky is <strong>slightly overloaded</strong> due to the official release, thank you for being patient. We are working hard to improve the quality of service, a <strong>new architecture</strong> will be released soon!",
        "error.min.strict": "Must be strictly greater than {0}",
        "error.expected.keypathnode": "Node value expected",
        "error.real.precision": "Real number value with no more than {0} digit(s) including {1} decimal(s) expected",
        "alert.confidential": "Do not publish confidential information!",
        "error.expected.jsarray": "Array value expected",
        "error.expected.jsboolean": "Boolean value expected",
        "error.expected.jsnumberorjsstring": "String or number expected",
        "constraint.email": "Email",
        "alert.linkReady": "Your link is ready:",
        "error.expected.jodadate.format": "Joda date value expected",
        "title.home": "Mocky: Real HTTP mocking",
        "format.uuid": "UUID",
        "error.pattern": "Must satisfy {0}",
        "error.path.result.multiple": "Multiple results for the given path",
        "constraint.maxLength": "Maximum length: {0}",
        "btn.generate": "Generate my HTTP Response",
        "error.date": "Valid date required",
        "constraint.required": "Required",
        "error.minLength": "Minimum length is {0}",
        "presentation.baseline": "Mock your HTTP responses to test your REST API",
        "error.max.strict": "Must be strictly less than {0}",
        "constraint.minLength": "Minimum length: {0}",
        "error.expected.jsnumber": "Number value expected",
        "alert.gist": "private gist",
        "form.code": "Status Code",
        "error.expected.date.isoformat": "Iso date value expected",
        "news.jsonp": "Now with <strong>JSONP</strong> support, just add <strong>?callback=myfunction</strong> to your links.",
        "eg": "Eg:",
        "error.expected.date": "Date value expected",
        "error.number": "Numeric value expected",
        "feedback": "Give feedback!",
        "constraint.min": "Minimum value: {0}",
        "alert.dataStored": "Your data will be stored in a",
        "form.body": "Body",
        "error.expected.jodatime.format": "Joda time value expected",
        "error.expected.jsobject": "Object value expected",
        "form.location": "Location",
        "btn.wait": "A dwarf will handle your request, please wait...",
        "error.real": "Real number value expected",
        "error.min": "Must be greater or equal to {0}",
        "btn.advanced": "Switch to advanced mode",
        "error.required": "This field is required",
        "error.maxLength": "Maximum length is {0}",
        "error.invalid.java.util.Date": "Invalid date value",
        "constraint.max": "Maximum value: {0}",
        "btn.basic": "Switch to basic mode",
        "form.customHeaders": "Custom headers",
        "format.real": "Real",
        "error.invalid": "Invalid value",
        "error.email": "Valid email required",
        "Mocky": "Mocky",
        "error.uuid": "Valid UUID required",
        "error.invalidForm": "Invalid form, please retry ;)",
        "form.contentType": "Content Type",
        "error.expected.jsstring": "String value expected",
        "error.max": "Must be less or equal to {0}",
        "format.numeric": "Numeric",
        "error.expected.uuid": "UUID value expected",
        "format.date": "Date ('{0}')",
        "form.legend": "Generate your custom response",
        "error.expected.validenumvalue": "Valid enumeration value expected",
        "error.path.empty": "Empty path",
        "error.expected.time": "Time value expected",
        "error.retry": "An error occured... please retry !",
        "error.expected.enumstring": "String value expected",
        "error.path.missing": "Missing path"
    };
    return f
})()