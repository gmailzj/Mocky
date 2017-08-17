/** 
 *    "statuscode"  -> number.verifying(min(0), max(9999)),
      "contenttype" -> nonEmptyText,
      "charset"     -> nonEmptyText,
      "location"    -> optional(text),
      "body"        -> text,
      "headerNames"  -> list(text),
      "headerValues"  -> list(text)
*/
const defaultOptions = {
    statuscode: null,
    contenttype: null,
    charset: null,
    location: null,
    body: null,
    headerNames: null,
    headerValues: null
};

function Mocker(options) {
    options = Object.assign({}, defaultOptions, options);
    for (var k in options) {
        this[k] = options[k];
    }
    // console.log(this);
}


module.exports = Mocker;