/**
 *function form build a form with various field types and send the data to formspree.
 */
function form(targetId) {
    const formData = {
        action:"https://formspree.io/f/xeokgvev",
        method: "post",
        fields: [
            { type: 'text', label: 'What is your name?', id: 'name_field' },
            { type: 'email', label: 'What is your email?', id: 'email_field' },
            { type: 'number', label: 'Which whole number is best?', id: 'best_whole_number', min: '0' },
            { type: 'date', label: 'Which day is best?', id: 'best_day' },
            { type: 'select', label: 'Which bear is best?', id: 'best_bear', options: ['Black', 'Brown', 'Care', 'Panda', 'Polar', 'Teddy'] },
            {
                type: 'radio-fieldset',
                legend: 'Do you like radio buttons?',
                name: 'enjoys_radio_buttons',
                options: [
                    { label: 'Yes', id: 'enjoys_radio_buttons' },
                    { label: 'No', id: 'enjoys_radio_buttons1' },
                    { label: 'None of your business', id: 'enjoys_radio_buttons2', checked: true }
                ]
            },
            { type: 'textarea', label: 'What is the meaning of life?', id: 'life_meaning', name: 'life_meaning', rows: '5', cols: '50', value: 'Enter the correct answer here' }
        ]
    };

    const formContainer = document.getElementById(targetId);

    if (!formContainer) {
        console.error(`Error: Element with ID "${targetId}" was not found.`);
        return;
    }

    let formHTML = `<form action="${formData.action}" method="${formData.method}">`;

    formData.fields.forEach(field => {
        if (field.type === 'select') {
            let optionsHTML = '<option value="">&nbsp;</option>';
            field.options.forEach(option => {
                optionsHTML += `<option>${option}</option>`;
            });
            formHTML += `<p><label for="${field.id}">${field.label}</label>
                         <select name="${field.name || ''}" id="${field.id}">
                             ${optionsHTML}
                         </select></p>`;
        } else if (field.type === 'radio-fieldset') {
            let radioButtonsHTML = '';
            field.options.forEach(option => {
                const checked = option.checked ? 'checked' : '';
                radioButtonsHTML += `<input type="radio" id="${option.id}" name="${field.name}" ${checked}>
                                     <label for="${option.id}">${option.label}</label><br>`;
            });
            formHTML += `<fieldset><legend>${field.legend}</legend>${radioButtonsHTML}</fieldset>`;
        } else if (field.type === 'textarea') {
            formHTML += `<p><label for="${field.id}">${field.label}</label>
                         <textarea id="${field.id}" name="${field.name}" rows="${field.rows}" cols="${field.cols}">${field.value}</textarea></p>`;
        } else {
            const minAttr = field.min ? `min="${field.min}"` : '';
            formHTML += `<p><label for="${field.id}">${field.label}</label>
                         <input type="${field.type}" id="${field.id}" ${minAttr}></p>`;
        }
    });

    formHTML += `<button type="submit">Send</button></form>`;

    formContainer.innerHTML = formHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    form('creating-a-web-form');
});