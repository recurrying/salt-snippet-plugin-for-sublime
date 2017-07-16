const fs = require('fs');
const SaltUI = require('./snippets.json');
// console.log(Object.keys(SaltUI).length);
for(let n in SaltUI) {
    const component = SaltUI[n];
    const tab = '    ';
    const fileName = `../snippets/${component.prefix}.sublime-snippet`;
    for(let i = 1; i< component.body.length; i++) {
        component.body[i] = '\t' + component.body[i];
    }
    let content = component.body.join('\n');
    fs.writeFileSync(
        fileName,
        `<snippet>
${tab}<content><![CDATA[
${tab}${content}
${tab}]]></content>
${tab}<tabTrigger>${component.prefix}</tabTrigger>
${tab}<description>${component.description}</description>
</snippet>`
    );
}