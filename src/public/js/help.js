import 'https://code.jquery.com/jquery-3.6.1.min.js';
export const jq=window.jQuery.noConflict(true);
const help={};
export const log=console.log;


help.jq=jq;
help.ok=(x) => alert(x? x:'ok')



export default help;