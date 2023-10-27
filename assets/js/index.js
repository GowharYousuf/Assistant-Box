//multiple steps form
    //DOM elements
    const DOM_strings = {
        stepsBtnClass   : 'multiSteps_progressBtn',
        stepsBtn        : document.querySelectorAll(`.multiSteps_progressBtn`),
        stepsBar        : document.querySelector('.multiSteps_progress'),
        stepsForm       : document.querySelector('.multiSteps_form'),
        stepsFormTextarea: document.querySelectorAll('.multiSteps_form_textarea'),
        stepFormPanelClass: 'multiSteps_panel',
        stepFormPanels  : document.querySelectorAll('.multiSteps_panel'),
        stepPrevBtnClass: 'js-btn-prev',
        stepNextBtnClass: 'js-btn-next' };
    
    //remove class from a set of items
    const removeClasses = (elemSet, className) => {
        elemSet.forEach(elem => {
        elem.classList.remove(className);
        });
    };
    
    //return exect parent node of the element
    const findParent = (elem, parentClass) => {
        let currentNode = elem;
        while (!currentNode.classList.contains(parentClass)) {
        currentNode = currentNode.parentNode;
        }
        return currentNode;
    };
    
    //get active button step number
    const getActiveStep = elem => {
        return Array.from(DOM_strings.stepsBtn).indexOf(elem);
    };
    
    //set all steps before clicked (and clicked too) to active
    const setActiveStep = activeStepNum => {
        //remove active state from all the state
        removeClasses(DOM_strings.stepsBtn, 'js-active');
        //set picked items to active
        DOM_strings.stepsBtn.forEach((elem, index) => {
        if (index <= activeStepNum) {
            elem.classList.add('js-active');
        }
        });
    };
    
    //get active panel
    const getActivePanel = () => {
        let activePanel;
        DOM_strings.stepFormPanels.forEach(elem => {
        if (elem.classList.contains('js-active')) {
            activePanel = elem;
        }
        });
        return activePanel;
    };
    
    //open active panel (and close unactive panels)
    const setActivePanel = activePanelNum => {
        //remove active class from all the panels
        removeClasses(DOM_strings.stepFormPanels, 'js-active');
        //show active panel
        DOM_strings.stepFormPanels.forEach((elem, index) => {
        if (index === activePanelNum) {
            elem.classList.add('js-active');
            setFormHeight(elem);
        }
        });
    };
    
    //set form height equal to current panel height
    const formHeight = activePanel => {
        const activePanelHeight = activePanel.offsetHeight + 40;
        DOM_strings.stepsForm.style.height = `${activePanelHeight}px`;
    };
    const setFormHeight = () => {
        const activePanel = getActivePanel();
        formHeight(activePanel);
    };
    //STEPS BAR CLICK FUNCTION
    DOM_strings.stepsBar.addEventListener('click', e => {
        //check if click target is a step button
        const eventTarget = e.target;
        if (!eventTarget.classList.contains(`${DOM_strings.stepsBtnClass}`)) {
        return;
        }
        //get active button step number
        const activeStep = getActiveStep(eventTarget);
        //set all steps before clicked (and clicked too) to active
        setActiveStep(activeStep);
        //open active panel
        setActivePanel(activeStep);
    });
    //PREV/NEXT BTN CLICK
    DOM_strings.stepsForm.addEventListener('click', e => {
        const eventTarget = e.target;
        //check if we clicked on `PREV` or NEXT` buttons
        if (!(eventTarget.classList.contains(`${DOM_strings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOM_strings.stepNextBtnClass}`)))
        {
        return;
        }
        //find active panel
        const activePanel = findParent(eventTarget, `${DOM_strings.stepFormPanelClass}`);
        let activePanelNum = Array.from(DOM_strings.stepFormPanels).indexOf(activePanel);
        //set active step and active panel onclick
        if (eventTarget.classList.contains(`${DOM_strings.stepPrevBtnClass}`)) {
        activePanelNum--;
        } else {
        activePanelNum++;
        }
        setActiveStep(activePanelNum);
        setActivePanel(activePanelNum);
    });
    //SETTING PROPER FORM HEIGHT ONLOAD
    window.addEventListener('load', setFormHeight, false);
    //SETTING PROPER FORM HEIGHT ONRESIZE
    window.addEventListener('resize', setFormHeight, false);