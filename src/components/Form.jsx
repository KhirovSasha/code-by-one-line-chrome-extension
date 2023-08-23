import React, { useState } from "react";

function Form() {
    const [row, setRow] = useState('');

    function removeSpacesFromCSS(cssCode) {
        // Preserve newlines for comment code blocks
        const commentsPreserved = cssCode.replace(/\/\*.*?\*\//gs, (match) => {
            return match.replace(/[^\n]/g, '');
        });

        // Regular expression to match spaces between selectors and properties, and around {}
        const regex1 = /(\s*[\{\}]\s*)|([^\{\};])\s+([^\{\};])/g;
        // Regular expression to match spaces within property names/values
        const regex2 = /:\s/g;

        // Replace spaces between selectors and properties, and around {} with no spaces
        const cleanedCSS1 = commentsPreserved.replace(regex1, (_, braces, before, after) => {
            if (braces) return braces.trim();
            return before + after;
        });
        // Replace spaces within property names/values with no spaces
        const cleanedCSS2 = cleanedCSS1.replace(regex2, ':');

        return cleanedCSS2;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = formData.get('inputData');

        const result = removeSpacesFromCSS(data);
        setRow(result);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="inputData" />
                <input type="submit" value="Send Request" />
            </form>
            <input type="text" value={row}/>
        </div>
    );
}

export default Form;