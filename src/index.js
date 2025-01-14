import commands from './commands';

export default (editor, opts = {}) => {
    const options = {
        ...{
            //Panel to append the code editor
            panelId: 'views-container',
            //Append to element instead of views-container
            appendTo: '',
            //State when open
            openState: {
                cv: '65%',
                pn: '35%'
            },
            //State when closed
            closedState: {
                cv: '85%',
                pn: '15%'
            },
            //Allow editing of javascript, set allowScripts to true for this to work
            editJs: true,
            //Remove component data eg data-gjs-type="..."
            clearData: false,
            //Code viewer options
            codeViewOptions: {},
            //Used to remove css from the Selector Manager
            cleanCssBtn: true,
            //Save HTML button text
            htmlBtnText: 'Apply',
            //Save CSS button text
            cssBtnText: 'Apply',
            //Clean CSS button text
            cleanCssBtnText: 'Tidy CSS'
        },
        ...opts
    };

    // Load commands
    commands(editor, options);
};
