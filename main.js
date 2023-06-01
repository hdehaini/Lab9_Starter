console.log("App Started");


// Function for Console Log Demo
function consoleLog() {
    console.log("This is an example of a console log!");
}

// Function for Console Error Demo
function consoleError() {
    console.error("This is a console error message.");
}

// Function for Console Count Demo
function consoleCount() {
    console.count();
}

// Function for Console Warn Demo
function consoleWarn() {
    console.warn("This is a console warning message.");
}

// Function for Console Assert Demo
function consoleAssert() {
    const x = 5;
    const y = 3;
    const reason = 'x is expected to be less than y';
    console.assert(x < y, { x, y, reason });
}

// Function for Console Clear Demo
function consoleClear() {
    console.clear();
}

// Function for Console Dir Demo
function consoleDir() {
    console.dir(document.head);
}

// Function for Console Dirxml Demo
function consoleDirxml() {
    console.dirxml(document);
}

// Function for Console Group Start Demo
function consoleGroup() {
    const label = 'Adolescent Irradiated Espionage Tortoises';
    console.group(label);
    console.info('Leo');
    console.info('Mike');
    console.info('Don');
    console.info('Raph');
}

// Function for Console Group End Demo
function consoleGroupEnd() {
    console.groupEnd();
}

// Function for Console Table Demo
function consoleTable() {
    var people = [
        { first: 'René', last: 'Magritte' },
        { first: 'Chaim', last: 'Soutine', birthday: '18930113' },
        { first: 'Henri', last: 'Matisse' }
    ];
    console.table(people);
}

// Function for Start Timer Demo
function consoleTime() {
    console.time();
}

// Function for End Timer Demo
function consoleTimeEnd() {
    console.timeEnd();
}

// Function for Console Trace Demo
function consoleTrace() {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
}

// Function to trigger a global error
function triggerGlobalError() {
    // This code intentionally throws an error
    nonexistentFunction();
}
