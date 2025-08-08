/**
 * THe code generates a timetable for index.html
 * function timetable takes the data of the related course to related seasons.
 */
function timetable() {

    const winterCourses = [
        { code: 'CSD123', name: 'Intro to Programming', hrs: 3 },
        { code: 'CSD456', name: 'Computing ENV and Tool', hrs: 3 },
        { code: 'CSD789', name: 'Technology/Society', hrs: 2 },
        { code: 'CSD101', name: 'Computer Math', hrs: 4 },
        { code: 'CSD112', name: 'Hardware/OS/Networking', hrs: 4 },
        { code: 'CSD123', name: 'Academic Transition', hrs: 2 }
    ];

    const summerCourses = [
        { code: 'CSD121', name: 'Programming Concepts 1', hrs: 4 },
        { code: 'CSD112', name: 'Intro to WEB DEB', hrs: 4 },
        { code: 'CSD123', name: 'Database 1', hrs: 4 },
        { code: 'CSA103', name: 'Business Application 1', hrs: 3 },
        { code: 'CSD124', name: 'System Analysis/Design', hrs: 2 },
        { code: 'CSD125', name: 'Emerging Technology', hrs: 2 }
    ];

    const container = document.getElementById('making-a-table');

    if (!container) {
        console.error("The element 'making-a-table' was not found.");
        return;
    }

    let htmlContent = '<table>' +
        '<caption>Table 1. Current Courses</caption>' +
        '<thead><tr><th scope="col" rowspan="2">Term</th><th scope="col" colspan="3">Course</th></tr>' +
        '<tr><th scope="col">Code</th><th scope="col">Name</th><th scope="col">Hrs/Week</th></tr></thead>' +
        '<tbody>';

    let totalHours = 0;

    for (let i = 0; i < winterCourses.length; i++) {
        const course = winterCourses[i];
        if (i === 0) {
            htmlContent += `<tr><th rowspan="${winterCourses.length}">Winter</th>`;
        } else {
            htmlContent += '<tr>';
        }
        htmlContent += `<td>${course.code}</td><td>${course.name}</td><td>${course.hrs}</td></tr>`;
        totalHours += course.hrs;
    }

    for (let i = 0; i < summerCourses.length; i++) {
        const course = summerCourses[i];
        if (i === 0) {
            htmlContent += `<tr><th rowspan="${summerCourses.length}">Summer</th>`;
        } else {
            htmlContent += '<tr>';
        }
        htmlContent += `<td>${course.code}</td><td>${course.name}</td><td>${course.hrs}</td></tr>`;
        totalHours += course.hrs;
    }

    htmlContent += '</tbody><tfoot><tr><th scope="col" colspan="3">Total</th>' +
        `<th align="left">${totalHours}</th></tr></tfoot></table>`;

    container.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', timetable);